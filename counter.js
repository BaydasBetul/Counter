let decBtn = document.getElementById("dec");
let resBtn = document.getElementById("res");
let incBtn = document.getElementById("inc");
const resultField = document.getElementById("result");
let count = 0;

decBtn.addEventListener("click", () => {
    count -= 1;
    resultField.textContent = count;
    resultField.style.color = 'red';
});

resBtn.addEventListener("click", () => {
    count = 0;
    resultField.textContent = count;
    resultField.style.color = 'purple';
});

incBtn.addEventListener("click", () => {
    count += 1;
    resultField.textContent = count;
    resultField.style.color = 'green';
});