const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
    const userName = event.target.value.trim();
    if (userName === "") {
        console.log(outputText.textContent);
    } else {
        console.log(outputText.textContent = userName);
    }
});