
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (callback) => {
    let user = input.value.trim();
    if (user === "") {
        output.textContent = "Anonymous";        
    } else {
        output.textContent = user;
    }
});