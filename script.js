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
        userInput.includes("drawing") ||
        userInput.includes("art") ||
        userInput.includes("illustration") ||
        userInput.includes("logo") ||
        userInput.includes("poster") ||
        userInput.includes("design") ||
        userInput.includes("edit photo") ||
        userInput.includes("generate image") ||
        userInput.includes("صورة") ||
        userInput.includes("صور") ||
        userInput.includes("رسم") ||
        userInput.includes("رسمة") ||
        userInput.includes("تصميم") ||
        userInput.includes("لوقو") ||
        userInput.includes("شعار") ||
        userInput.includes("بوستر") ||
        userInput.includes("تعديل صورة")
    ) {
        category = "image";
    }

    // Writing
    else if (
        userInput.includes("write") ||
        userInput.includes("writing") ||
        userInput.includes("article") ||
        userInput.includes("essay") ||
        userInput.includes("blog") ||
        userInput.includes("post") ||
        userInput.includes("research paper") ||
        userInput.includes("research article") ||
        userInput.includes("summarize") ||
        userInput.includes("summary") ||
        userInput.includes("report") ||
        userInput.includes("email") ||
        userInput.includes("story") ||
        userInput.includes("caption") ||
        userInput.includes("script") ||
        userInput.includes("proofread") ||
        userInput.includes("كتابة") ||
        userInput.includes("اكتب") ||
        userInput.includes("مقال") ||
        userInput.includes("بحث") ||
        userInput.includes("مقال بحث") ||
        userInput.includes("بحث علمي") ||
        userInput.includes("تقرير") ||
        userInput.includes("تلخيص") ||
        userInput.includes("ملخص") ||
        userInput.includes("قصة") ||
        userInput.includes("رواية") ||
        userInput.includes("ايميل") ||
        userInput.includes("رسالة") ||
        userInput.includes("تدقيق")
    ) {
        category = "writing";
    }

    // Coding
    else if (
        userInput.includes("code") ||
        userInput.includes("coding") ||
        userInput.includes("program") ||
        userInput.includes("programming") ||
        userInput.includes("website") ||
        userInput.includes("app") ||
        userInput.includes("developer") ||
        userInput.includes("debug") ||
        userInput.includes("api") ||
        userInput.includes("software") ||
        userInput.includes("script") ||
        userInput.includes("build a site") ||
        userInput.includes("برمجة") ||
        userInput.includes("برمج") ||
        userInput.includes("كود") ||
        userInput.includes("اكواد") ||
        userInput.includes("موقع") ||
        userInput.includes("تطبيق") ||
        userInput.includes("مبرمج") ||
        userInput.includes("تصحيح كود") ||
        userInput.includes("سوفتوير")
    ) {
        category = "coding";
    }

    // Data
    else if (
        userInput.includes("data") ||
        userInput.includes("analysis") ||
        userInput.includes("analyze") ||
        userInput.includes("excel") ||
        userInput.includes("spreadsheet") ||
        userInput.includes("chart") ||
        userInput.includes("graph") ||
        userInput.includes("statistics") ||
        userInput.includes("dataset") ||
        userInput.includes("بيانات") ||
        userInput.includes("تحليل") ||
        userInput.includes("احصائيات") ||
        userInput.includes("اكسل") ||
        userInput.includes("جدول") ||
        userInput.includes("رسم بياني")
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
