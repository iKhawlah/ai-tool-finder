function findTools() {
    const userInput = document.querySelector("input").value;

    if (userInput.trim() === "") {
        alert("Please tell us what you want to do.");
        return;
    }

    alert("You entered: " + userInput);
}
