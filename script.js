// constants and variables set

const clearBoard = document.getElementById('clearBoard');
const defaultGridSize = 16
var grid = document.getElementById('grid')
const newGridSize = ''


function newGridPrompt(newGridSize) {
     newGridSize = prompt('How many squares do you want in your next grid? (max 100)');
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
        square.addEventListener('mouseover', changeColor)
        document.getElementById('grid').appendChild(square);
    }
    
}


function changeColor(e) {
    e.target.style.backgroundColor = 'lightyellow';
}



function clear() {
    grid.innerHTML = ''
}

window.onload = () => {
    setGrid(defaultGridSize);
}


