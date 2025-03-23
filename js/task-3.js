const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", updateGreeting);

function updateGreeting() {
  const inputValue = nameInput.value.trim();

  const greetingText = inputValue === "" ? "Anonymous" : inputValue;

  nameOutput.textContent = greetingText;
}
