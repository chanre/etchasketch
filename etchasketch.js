function createSquares(squareSize) {
    const grid = document.querySelector(".grid");
    const total = squareSize * squareSize;
    grid.style.gridTemplateRows = `repeat(${squareSize}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`;
    for (let i = 0; i < total; i++)  {
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.setAttribute("draggable", false);
        square.addEventListener("mousedown", colourGrid);
        square.addEventListener("mouseenter", colourGrid);
        grid.appendChild(square).className = "square";
    }
    
}

function colourGrid(e) {
    e.preventDefault();
    const square = e.target;
    if (e.buttons === 0) return;
    square.style.backgroundColor = "black";
}

function clearGrid() {
    const grid = document.querySelector(".square");
}

let gridSize = 40;
const sizeText = document.querySelector(".size");
const slider = document.querySelector(".slider");

slider.onmousemove = (e) => {
    sizeText.textContent = `${parseInt(e.target.value) + 15} x ${parseInt(e.target.value) + 15}`;
}

slider.onchange = (e) => {
    gridSize = e.target.value;
    createSquares(gridSize);
}

createSquares(40);