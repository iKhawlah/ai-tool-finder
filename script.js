function findTools() {
    const userInput = document.querySelector("input").value.toLowerCase();
    const result = document.querySelector("#result");

    if (userInput.trim() === "") {
        result.innerHTML = "Please tell us what you want to do.";
        return;
    }

    if (userInput.includes("image") || userInput.includes("picture") || userInput.includes("صورة")) {
        result.innerHTML = `
            <h2>Recommended AI Tools</h2>
            <p>Gemini</p>
            <p>ChatGPT</p>
            <p>Canva AI</p>
        `;
    } else {
        result.innerHTML = `
            <h2>We need more information</h2>
            <p>Try describing what you want to create.</p>
        `;
    }
}
