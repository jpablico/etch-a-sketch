const DEFAULT_VALUE = '#69a2ff';
const DEFAULT_SIZE = 16;

const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const resetBtn = document.getElementById('eraserBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');
const value = document.getElementById('sizeSlider').oninput = () => setSizeValue(value);

function setSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function clearGrid() {
  grid.innerHTML = '';
}
function setGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++) {
      const gridDiv = document.createElement('div');
      gridDiv.classList.add('gridElement');
      grid.appendChild(gridDiv);
    }
}

const gridSize = 16;

/*
window.onload = () => {
    setGrid(gridSize);
}
*/
setGrid(32);