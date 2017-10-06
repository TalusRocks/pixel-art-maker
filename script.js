/////////CLICK CELLS, CHANGE COLOR

let cells = document.querySelectorAll('.cell');

for ( let i = 0; i < cells.length; i++ ) {
  let cell = cells[i];

  let changeColor = function () {
    cell.style.background = pickedColor;

  }

  cell.addEventListener("click", changeColor);
}

////////CLICK PALETTE, SAVE COLOR

let colors = document.querySelectorAll('.color-swatch');
//hold the picked color outside of the loop
let pickedColor = "";
//find and assign current color swatch
let currentSwatch = document.querySelector('.current-color');

for ( let i = 0; i < colors.length; i++ ) {
  let thisColor = colors[i];

  let chooseColor = function () {
    //get and store id of selected swatch
    pickedColor = thisColor.classList[0];
    currentSwatch.classList.add(pickedColor)
    console.log(thisColor.classList[0])
  }

  thisColor.addEventListener("click", chooseColor);
}
