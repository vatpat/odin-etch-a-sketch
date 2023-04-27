// Step 1: Create a webpage with 16x16 grid of square divs using JS
const container = document.querySelector("#container");

// Container will initially containn 16 rows (subcontainers) of squares, 
// subcontainers are arranged vertically while squares are arranged 
// horizonatally within subcontainers
function generateGrid(dimension) {
    for(let i = 0; i < dimension; i++) {
        let subcontainer = document.createElement("div");
        subcontainer.classList.add("subcontainer");
        for(let j = 0; j < dimension; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = "rgb(255,255,255)";
            subcontainer.appendChild(square);
        }
        container.appendChild(subcontainer);
    }
        // Step 2: Set up a “hover” effect so that the grid divs change color when the
        // mouse passes over them
        let squareList = document.querySelectorAll(".square");
        squareList.forEach(square => square.addEventListener("mouseover", e => {
            let colors = square.style.backgroundColor.split(",");
            let red = parseInt(colors[0].slice(4));
            if(red == 30) {
                square.style.backgroundColor = "rgb(0,0,0)";   
            } else {
                square.style.backgroundColor = `rgb(${red-25},${red-25},${red-25})`;
            }
        }));
}
generateGrid(16);

// Step 3: Add a button to the top of the screen that will send the user a 
// popup asking for the number of squares per side for the new grid. Once 
// entered, the existing grid should be removed and a new grid should be 
// generated
let button = document.querySelector("button");
button.addEventListener("click", e => {
    let dimension = prompt("Enter a number:");
    while(isNaN(Number(dimension)) || Number(dimension) > 100) {
        dimension = prompt("Enter a number:");
    } 
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    generateGrid(dimension);
});
