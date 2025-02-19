// Include the JavaScript code to load header and footer
document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert header content
    fetch("./posts/header.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("header-placeholder").innerHTML = html;

            // Execute scripts in the inserted HTML content
            const scripts = document.getElementById("header-placeholder").getElementsByTagName("script");
            for (let i = 0; i < scripts.length; i++) {
                const script = scripts[i];
                const scriptContent = script.innerHTML;
                // Create a new script element and set its content
                const newScript = document.createElement("script");
                newScript.innerHTML = scriptContent;
                // Append the new script element to the document body
                document.body.appendChild(newScript);
            }
            
        })
        .catch(error => {
            console.error("Error fetching header:", error);
        });

    // Fetch and insert footer content
    fetch("./posts/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer-placeholder").innerHTML = html;
        })
        .catch(error => {
            console.error("Error fetching footer:", error);
        });
});