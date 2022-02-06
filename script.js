// constants and variables set

const clearBoard = document.getElementById("clearBoard");
const grid = document.getElementById("grid");
const blackBtn = document.getElementById("modeBlack");
const rainbowBtn = document.getElementById("modeRainbow");
const defaultGridSize = 16;
const defaultMode = blackColor;
const newGridSize = "";

function newGridPrompt(newGridSize, newMode) {
  newGridSize = prompt(
    "Input the number of squares you want on your next grid(max 70) The bigger the number, the smaller the squares!"
  );

  newGridSize = parseInt(newGridSize);

  setGrid(newGridSize, newMode);
}

// event listeners

clearBoard.addEventListener("click", () => {
  clear();
  newGridPrompt(newGridSize, blackColor);
});

function setGrid(size, mode) {
  for (x = 0; x < size * size; x++) {
    var square = document.createElement("div");
    square.classList.add("block");
    square.setAttribute("id", "squares");
    square.style.width = `${600 / size}px`;
    square.style.height = `${600 / size}px`;
    square.style.position = "relative";
    square.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    square.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    square.addEventListener("mouseover", mode);
    document.getElementById("grid").appendChild(square);
  }
}

blackBtn.addEventListener("click", () => {
  clear();
  newGridPrompt(newGridSize, blackColor);
});
rainbowBtn.addEventListener("click", () => {
  clear();
  newGridPrompt(newGridSize, rainbowColor);
});

function blackColor(e) {
  e.target.style.backgroundColor = "#000000";
}

function rainbowColor(e) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = "#" + randomColor;
}

function clear() {
  grid.innerHTML = "";
}

window.onload = () => {
  setGrid(defaultGridSize, defaultMode);
};
