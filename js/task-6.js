function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amountInput = document.querySelector("#controls input");
  const amount = parseInt(amountInput.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);
    size += 10;
  }
  amountInput.value = "";
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}
