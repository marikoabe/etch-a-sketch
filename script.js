// Start with 16x16 grid by default

let rowSquares = 100;
let totalSquares = 0;
const container = document.querySelector("#container");
let containerWidth = 0;
const clearButton = document.querySelector("#clear-grid");

createEtchASketch(rowSquares);

function createEtchASketch(rowSquares) {

    let gridInfo = document.querySelector(".grid-info");
    gridInfo.textContent = rowSquares + "x" + rowSquares + " grid";

    totalSquares = rowSquares * rowSquares;
    adjustContainerWidth(rowSquares);
    createGrid(totalSquares);

    function adjustContainerWidth(rowSquares) {
        containerWidth = (rowSquares * 8) + "px";
        container.style.width = containerWidth;
    }

    function createGrid (totalSquares) {
        for (i = 1; i <= totalSquares; i++) {
            // Create grid squares
            const cell = document.createElement("div");
            cellClass = "cell" + i;
            cell.classList.add(cellClass);
            cell.style.cssText = "border: 1px solid #000000; height: 6px; width: 6px; background-color: #FFFFFF;";
            container.appendChild(cell);
        
            // Enable "drawing" i.e. turn grid square colour upon mouseover
            const specificCellClass = ".cell" + i;
            const specificCell = document.querySelector(specificCellClass);
            specificCell.addEventListener("mouseover", () => {
                // specificCell.style.backgroundColor = "#000000";

                // Creating a random colour
                const randomColour = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
                specificCell.style.backgroundColor = randomColour;
            })
        }
    }
}

clearButton.addEventListener("click", clearGrid);

function clearGrid() {
    for (i = 1; i <= totalSquares; i++) {
        cellClass = ".cell" + i;
        cellToRemove = document.querySelector(cellClass);
        cellToRemove.remove();
    }

    newRowSquares = prompt("Please enter the number of squares per side for the grid (max 100)");
    newRowSquaresInt = parseInt(newRowSquares);
        while (newRowSquaresInt > 100 || Number.isInteger(newRowSquaresInt) === false) {
            newRowSquares = prompt("You must enter a number under 100, please try again");
            newRowSquaresInt = parseInt(newRowSquares);
        }
    
    createEtchASketch(newRowSquares);
}