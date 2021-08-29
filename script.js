
for(x=0; x<= 255; x++) {
    var square = document.createElement('div');
    square.classList.add('block');
    square.setAttribute('id', 'squares');
    square.style.width = '30px';
    square.style.height= '30px';
    
    
    document.getElementById('grid').appendChild(square);
}
