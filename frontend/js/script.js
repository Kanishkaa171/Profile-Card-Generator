const form = document.getElementById("profileForm");
const profileCard = document.getElementById("profileCard");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    // Collect form data
    const userData = {
        name: document.getElementById("name").value.trim(),
        bio: document.getElementById("bio").value.trim(),
        image: document.getElementById("image").value.trim()
    };

    message.textContent = "Generating profile...";
    message.style.color = "#5656d8";

    try {

        // Send POST request to Flask backend
        const response = await fetch(
            "http://127.0.0.1:5000/generate-profile",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(userData)
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        // Receive processed profile data
        const profile = result.profile;

        // Display profile card
        profileCard.innerHTML = `
            <img src="${profile.image}" alt="Profile Image"
                 onerror="this.onerror=null; this.src='https://placehold.co/120x120?text=No+Image'">

            <h4>${escapeHTML(profile.name)}</h4>

            <p>${escapeHTML(profile.bio)}</p>
        `;

        message.textContent = result.message;
        message.style.color = "green";

    } catch (error) {

        message.textContent = error.message || "Something went wrong!";
        message.style.color = "red";

    }

});


// Escape user-provided text before inserting it into HTML
function escapeHTML(text) {
    return String(text).replace(/[&<>"']/g, function (char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}