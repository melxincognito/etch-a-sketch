// constants and variables set

const clearBoard = document.getElementById('clearBoard');
const grid = document.getElementById('grid');
const blackBtn = document.getElementById('modeBlack');
const rainbowBtn = document.getElementById('modeRainbow')
const defaultGridSize = 16;
const newGridSize = ''




function newGridPrompt(newGridSize) {
     newGridSize = prompt('How many squares do you want in your next grid? (max 70)');
    newGridSize = parseInt(newGridSize);
    setGrid(newGridSize);
}


// event listeners 

clearBoard.addEventListener('click', () => { 
    clear();
    newGridPrompt();
});

function setGrid(size) { 
    for(x=0; x < size * size; x++) {
        var square = document.createElement('div');
        square.classList.add('block');
        square.setAttribute('id', 'squares');
        square.style.width = `${600 / size}px`;
        square.style.height= `${600 / size}px`;
        square.style.position= 'relative';
        square.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        square.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        square.addEventListener('mouseover', rainbowColor)
        document.getElementById('grid').appendChild(square);
    }
    
    
}


function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function rainbowColor(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
}

function clear() {
    grid.innerHTML = ''
}

window.onload = () => {
    setGrid(defaultGridSize);
}


