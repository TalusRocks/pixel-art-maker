/////////CLICK CELLS, CHANGE COLOR
//1. find and assign cell
let cells = document.querySelectorAll('.cell');


//2a. put it in a loop so that it applies to all the cells
for ( let i = 0; i < cells.length; i++ ) {
  //2b. specify the one thing
  let cell = cells[i];
  //2c. create function to change color
  let changeColor = function () {
    //change background color of cell
    cell.style.background = pickedColor;
  }
  //3. hook up event listener to trigger fxn
  cell.addEventListener("click", changeColor);
}

////////CLICK PALETTE, SAVE COLOR
//1. find and assign color
let colors = document.querySelectorAll('.color-swatch');
//hold the picked color outside of the loop
let pickedColor = "";
//find and assign current color swatch
let currentSwatch = document.querySelector('.current-color');

//2a. put it in a loop so it applies to all swatches
for ( let i = 0; i < colors.length; i++ ) {
  //2b. specify the one thing
  let thisColor = colors[i];

  //2c. create function to save color
  let chooseColor = function () {
    //get and store id of selected swatch
    pickedColor = thisColor.id;
    currentSwatch.id = pickedColor;
    console.log(currentSwatch)
  }

  //3. hook up event listener to trigger fxn
  thisColor.addEventListener("click", chooseColor);
}

//////
//current color swatch
//1. get current color location, set to variable

//2. event li
