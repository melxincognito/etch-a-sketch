// constants and variables set

const clearBoard = document.getElementById('clearBoard');
const defaultGridSize = 16




// event listeners 

clearBoard.addEventListener('click', () => { 
    clear();
});

function setGrid(size) { 
    for(x=0; x < size * size; x++) {
        var square = document.createElement('div');
        square.classList.add('block');
        square.setAttribute('id', 'squares');
        square.style.width = '30px';
        square.style.height= '30px';
        square.addEventListener('mouseover', changeColor)
        document.getElementById('grid').appendChild(square);
    
    }
}


function changeColor(e) {
    e.target.style.backgroundColor = 'lightyellow';
}


function clear() {
    window.location.reload();
    prompt('How many squares do you want in your next grid? (max 100)')

}

window.onload = () => {
    setGrid(defaultGridSize);
}
