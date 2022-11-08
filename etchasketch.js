function createSquares(squareSize) {
    const grid = document.querySelector(".grid");
    const total = squareSize * squareSize;
    grid.style.gridTemplateRows = `repeat(${squareSize}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`;
    for (let i = 0; i < total; i++)  {
        const square = document.createElement("div");
        square.style.border = "1px solid blue";
        grid.appendChild(square).className = "square";
    }
    
}

createSquares(64);