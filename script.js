function findTools() {
    const userInput = document.querySelector("input").value.toLowerCase();
    const result = document.querySelector("#result");

    if (userInput.trim() === "") {
        result.innerHTML = "Please tell us what you want to do.";
        return;
    }

 let category = "";

if (
    userInput.includes("image") ||
    userInput.includes("picture") ||
    userInput.includes("photo") ||
    userInput.includes("صورة") ||
    userInput.includes("صور") ||
    userInput.includes("تصميم")
) {
    category = "image";
} else if (
    userInput.includes("write") ||
    userInput.includes("writing") ||
    userInput.includes("article") ||
    userInput.includes("كتابة") ||
    userInput.includes("مقال")
) {
    category = "writing";
} else if (
    userInput.includes("code") ||
    userInput.includes("coding") ||
    userInput.includes("program") ||
    userInput.includes("برمجة") ||
    userInput.includes("كود")
) {
    category = "coding";
} else if (
    userInput.includes("data") ||
    userInput.includes("analysis") ||
    userInput.includes("analyze") ||
    userInput.includes("بيانات") ||
    userInput.includes("تحليل")
) {
    category = "analysis";
}

    if (category === "") {
        result.innerHTML = `
            <h2>We need more information</h2>
            <p>Try describing what you want to create.</p>
        `;
        return;
    }

    const recommendedTools = tools.filter(tool =>
        tool.categories.includes(category)
    );

    result.innerHTML = `
        <h2>Recommended AI Tools</h2>
        ${recommendedTools.map(tool => `
            <div>
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
            </div>
        `).join("")}
    `;
}
