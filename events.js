const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");
const result = document.querySelector("#result");
const inputA = document.querySelector("#text")

function print(message) {
  const ts = Date.now();
  const line = document.createElement("div");
  line.innerText = ts + ": " + message;
  result.append(line);
}

function handleButtonAClickEvent() {
  print("Button A Clicked");
}

function handleButtonBClickEvent() {
  print("Button B Clicked");
}
function handleInputAInputEvent() {
  print("Input A type");
}

buttonA.addEventListener("click", handleButtonAClickEvent);
buttonB.addEventListener("click", handleButtonBClickEvent);
inputA.addEventListener("input", handleInputAInputEvent)

window.addEventListener("load", () => {
  print("Window loaded");
});
