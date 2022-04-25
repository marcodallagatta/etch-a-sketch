const gridCont = document.getElementById('grid');

function gridMake(squares = 16) {
    let div = document.createElement('div');
    for (let i = 0; i < squares; i++) {
        gridCont.appendChild(div.cloneNode(div));
    }

}
gridMake(16)

const gridElems = document.querySelectorAll('#grid div');

function hoverHighlight(color = 'red') {
    gridElems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.background = color;
        })
    });
}
hoverHighlight('black');