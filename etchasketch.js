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
    let r = g = b = 0;
    const square = e.target;
    if (e.buttons === 0) return;
    if (rainbow) {
        r = parseInt((Math.random()*255) + 1);
        g = parseInt((Math.random()*255) + 1);
        b = parseInt((Math.random()*255) + 1);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        square.style.backgroundColor = color;
    }
}

function clearGrid() {
    const grid = document.querySelector(".grid");
    console.log(grid);
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

let gridSize = 40;
let color = "black";
let rainbow = false;
const sizeText = document.querySelector(".size");
const slider = document.querySelector(".slider");
const clear = document.querySelector("#clear");
const colorPicker = document.querySelector(".colorPicker");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");

slider.onmousemove = (e) => {
    sizeText.textContent = `${parseInt(e.target.value) + 15} x ${parseInt(e.target.value) + 15}`;
}

slider.onchange = (e) => {
    gridSize = parseInt(e.target.value) + 15;
    clearGrid();
    createSquares(gridSize);
}

clear.onclick = () => {
    clearGrid();
    createSquares(gridSize);
};

eraser.onclick = () => {
    color = "white";
    rainbow = false;
    colorBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraser.classList.add("active");
}

colorBtn.onclick = () => {
    rainbow = false;
    color = colorPicker.value;
    colorBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
    eraser.classList.remove("active");
};

rainbowBtn.onclick = () => {
    rainbow = true;
    rainbowBtn.classList.add("active");
    colorBtn.classList.remove("active");
    eraser.classList.remove("active");
};

colorPicker.oninput = (e) => {
    color = e.target.value
    rainbow = false;
    colorBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
    eraser.classList.remove("active");
};

window.onload = () => {
    createSquares(gridSize)
    colorBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
    eraser.classList.remove("active");
};