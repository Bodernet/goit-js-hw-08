function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  input.value = "";

  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement("div");
    divBox.style = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    size += 10;
    boxesContainer.insertAdjacentElement("beforeend", divBox);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
