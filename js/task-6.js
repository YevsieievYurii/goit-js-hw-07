function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", function() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }

const fragment = document.createDocumentFragment();

for (let i = 0; i < amount; i++) {
  const size = 30 + i * 10;
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  fragment.appendChild(box);
}

boxesDiv.innerHTML = "";
boxesDiv.appendChild(fragment);

input.value = "";
});

destroyBtn.addEventListener("click", function() {
  boxesDiv.innerHTML = "";
});