function setGrid(gridSize) {
  const grid = document.querySelector("#grid");
  grid.textContent = ""
  grid.setAttribute(
    "style",
    `grid-template-columns:  repeat(${gridSize}, 1fr)`
  );
  for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.addEventListener("mouseover", changeColor);
    grid.appendChild(cell);
  }
}

function changeColor(e) {
  console.log(e);
  const color = getColor()
  e.target.setAttribute("style", `background-color: ${color}`);
}

function getColor(){
    const checkbox = document.querySelector("#random-color-checkbox")
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return checkbox.checked ? randomColor : "black"
}
function onSizeInput(e) {
  const size = +e.target.value;
  if(size > 100){
    alert("Size must be 100 or lower")
    return
  }
  setGrid(size);
}
const sizeInput = document.querySelector("#sizeInput");
sizeInput.addEventListener("change", onSizeInput);

setGrid(32);
