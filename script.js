const gridCont = document.getElementById('grid');
const resetButton = document.getElementById('reset');
const newGridButton = document.getElementById('newGrid');

function gridMake(squares = 16) {
    // resets the container grid
    gridCont.innerHTML = '';
    gridCont.style.gridTemplateColumns = '';
    // crete divs for the container grid
    const div = document.createElement('div');
    for (let i = 0; i < squares; i++) {
        gridCont.appendChild(div.cloneNode(div));
    }
    // generated the correct number of '1fr' for the container grid
    const sideNum = Math.sqrt(squares);
    for (let x = 0; x < sideNum; x++) {
        gridCont.style.gridTemplateColumns += ' 1fr';
    }
    // calls the event listeners for the new grid
    hoverHighlight('black');
}
gridMake(100);

function hoverHighlight(color = 'red') {
    const gridElems = document.querySelectorAll('#grid div');
    gridElems.forEach(item => {
        item.addEventListener('mouseover', () => {
            if (item.style.opacity === '') {
                let randomHexColor = Math.floor(Math.random()*16777215).toString(16);
                item.style.background = `#${randomHexColor}`;
                item.style.opacity = '0.2';
            } else  if (item.style.opacity < 1) {
                item.style.opacity = parseFloat(item.style.opacity) + 0.2;
            }
        })
    });
}

function reset() {
    const gridElems = document.querySelectorAll('#grid div');
    gridElems.forEach(item => {
        item.style.background = '';
        item.style.opacity = '';
    });
}
resetButton.addEventListener('click', function() {reset()});
newGrid.addEventListener('click', function() {
    const size = prompt('Input size for new grid, maximum is 100:');
    if (size > 100 || isNaN(size)) {
        alert('Invalid selection');
    } else {
        reset();
        gridMake(size);
    }
});