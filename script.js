//1. find and assign cell
let cells = document.querySelectorAll('.cell');

//2. create function to change color
//2b. put it in a loop so that it applies to all the cells
for ( let i = 0; i < cells.length; i++ ) {
  let cell = cells[i];

  let changeColor = function () {
    cell.style.background = "red";
  }
  //3. hook up event listener to trigger fxn
  cell.addEventListener("click", changeColor);
}
