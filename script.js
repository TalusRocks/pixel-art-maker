/////////MULTIPLY ROWS
//thing to copy
let cellRow =
`
<div class="row">
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
</div>`

//where to paste
let canvas = document.querySelector('.canvas')
let rows = ''

let rowQty = Math.round(window.innerHeight*0.03)

console.log(Math.round(window.innerHeight*0.025))

for (let j = 0; j < rowQty; j++) {
  rows += cellRow
}

canvas.innerHTML = rows

/////////CLICK CELLS, CHANGE COLOR

let cells = document.querySelectorAll('.cell');
let down = false

for ( let i = 0; i < cells.length; i++ ) {
  let cell = cells[i];

  let changeColor = function () {
    cell.classList.add(pickedColor)
  }


  cell.addEventListener("click", changeColor);

  /////////COLOR ON MOUSE 'DRAG'

  cell.addEventListener("mousedown", function() {
    down = true
    console.log(down)//true
  })

  cell.addEventListener("mouseenter", function() {
    console.log("mouse before if", down)
    if (down === true) {
      cell.classList.add(pickedColor)
      console.log("mouseenterrr")
    }
  })

  cell.addEventListener("mouseup", function() {
    down = false
    console.log("STOPIT")
  })

}


console.log(down)



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
