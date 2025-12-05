const container = document.querySelector(".container")
const resetbutton = document.getElementById("reset")
const colorpicker = document.getElementById("colorpicker")
const btn = document.getElementById("num")

function addHover(){
    const squares = document.querySelectorAll(".square")
    squares.forEach(square =>{
        square.addEventListener("mouseover",function(){
            square.style.backgroundColor = colorpicker.value
        })
    })
} 

function resetgrid(){
    const squares = document.querySelectorAll(".square")
    squares.forEach(square=>{
        square.style.backgroundColor = "white"
    })
        
    
}

function createGrid(size){
    container.innerHTML = ""
    const squaresize = 500/size
    for (let i = 0 ; i < size*size ; i++){
        const grid = document.createElement("div")
        grid.className = "square"
        grid.style.width = squaresize + "px"
        grid.style.height = squaresize + "px"
        container.appendChild(grid)
    }
    addHover()
}

createGrid(16)

resetbutton.addEventListener("click",resetgrid)

btn.addEventListener("click", () => {
    let size = Number(prompt("Choose a grid size (max 100):"));
    while (isNaN(size)) {
        size = Number(prompt("Choose a grid size (max 100):"));
    }
    size = Math.min(Math.max(size, 1), 100);
    createGrid(size);
})







