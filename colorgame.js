var numSquares= 6
var colors = []
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();

}
function setupModeButtons(){
  for(var i = 0; i < modeButtons.lenth; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
     squares[i].style.backgroundColor = colors[i];
     squares[i].addEventListener("click", function(){
      var clickColor = this.style.backgroundColor;
      if(clickColor === pickedColor){
        messageDisplay.textContent="Correct"
        resetButton.textContent="Play Again"
        changeColors(theOne);
        h1.style.background = clickColor;
      } else {
        this .style.backgroundColor ="#232323";
        messageDisplay.textContent="Try again"
      }
   });
  }
}
// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected")
//   easyBtn.classList.add("selected")
//   numSquares=3;
//   colors = generateRandomColors(numSquares)
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i =0; i<squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor= colors[i]
//     }else{
//       squares[i].style.display="none"
//     }
//   }
// });
//
// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors=generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i =0; i<squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// })

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent= pickedColor;
  resetButton.textContent="New Colors"
  messageDisplay.textContent=""
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display ="block"
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none"
    }
  }
  h1.style.backgroundColor= "steelblue"
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = color
  }
}

 function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
  var arr =[]
  for(var i = 0; i<num; i++){
    arr.push(randomColor())

  }

  return arr
}
function randomColor(){
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
   return "rgb(" + r +", " + g +", "+ b + ")"
}
