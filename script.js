function findTools() {

    const userInput = document.querySelector("input").value.toLowerCase();
    const result = document.querySelector("#result");

    if (userInput.trim() === "") {
        result.innerHTML = `
            <h2>Tell us what you need first.</h2>
        `;
        return;
    }

    let category = "";

    // Images
    if (
        userInput.includes("image") ||
        userInput.includes("picture") ||
        userInput.includes("photo") ||
        userInput.includes("draw") ||
        userInput.includes("art") ||
        userInput.includes("صورة") ||
        userInput.includes("صور") ||
        userInput.includes("رسم")
    ) {
        category = "image";
    }

    // Writing
    else if (
        userInput.includes("write") ||
        userInput.includes("writing") ||
        userInput.includes("article") ||
        userInput.includes("essay") ||
        userInput.includes("كتابة") ||
        userInput.includes("مقال")
    ) {
        category = "writing";
    }

    // Coding
    else if (
        userInput.includes("code") ||
        userInput.includes("coding") ||
        userInput.includes("program") ||
        userInput.includes("website") ||
        userInput.includes("app") ||
        userInput.includes("برمجة") ||
        userInput.includes("كود") ||
        userInput.includes("موقع") ||
        userInput.includes("تطبيق")
    ) {
        category = "coding";
    }

    // Data
    else if (
        userInput.includes("data") ||
        userInput.includes("analysis") ||
        userInput.includes("analyze") ||
        userInput.includes("excel") ||
        userInput.includes("بيانات") ||
        userInput.includes("تحليل")
    ) {
        category = "data";
    }

    if (category === "") {
        result.innerHTML = `
            <h2>We couldn't identify the task yet.</h2>
            <p>Try describing what you want to create or accomplish.</p>
        `;
        return;
    }

    const recommendedTools = tools.filter(
        tool => tool.category === category
    );

    if (recommendedTools.length === 0) {
        result.innerHTML = `
            <h2>We're still building this category.</h2>
        `;
        return;
    }

    const bestTool = recommendedTools[0];
    const alternatives = recommendedTools.slice(1);

    result.innerHTML = `
        <div class="best-match">
            <div class="result-label">BEST MATCH</div>

            <h2>${bestTool.name}</h2>

            <p class="best-for">
                Best for: ${bestTool.bestFor}
            </p>

            <p>
                ${bestTool.description}
            </p>

            <span class="pricing">
                ${bestTool.pricing}
            </span>
        </div>

        <div class="alternatives">

            <h2>Also consider</h2>

            ${alternatives.map(tool => `
                <div class="tool-card">
                    <h3>${tool.name}</h3>

                    <p>
                        <strong>Best for:</strong>
                        ${tool.bestFor}
                    </p>

                    <p>${tool.description}</p>

                    <span class="pricing">
                        ${tool.pricing}
                    </span>
                </div>
            `).join("")}

        </div>
    `;
}
