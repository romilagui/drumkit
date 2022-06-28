// The button will trigger this function
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var audio = new Audio('crash.mp3');
for (var i = 0; i<numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  // console.log(this.innerHTML);
  // this.style.color = "white";
});

}

// audio.play();