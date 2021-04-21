
// Function for the sound
var audio = new Audio('audio_file.mp3');
audio.play();

function w(){

  var crash = new Audio('sounds/crash.mp3');
  crash.play();
  document.querySelectorAll(".drum")[0].classList.add("elementToFadeInAndOut");
  setTimeout(function(){ document.querySelectorAll(".drum")[0].classList.remove("elementToFadeInAndOut"); }, 2000);
}

function a(){
  var kick_bass = new Audio('sounds/kick-bass.mp3');
  kick_bass.play();
  document.querySelectorAll(".drum")[1].classList.add("elementToFadeInAndOut");

  setTimeout(function(){ document.querySelectorAll(".drum")[1].classList.remove("elementToFadeInAndOut"); }, 2000);

}

function s(){
  var snare = new Audio('sounds/snare.mp3');
  snare.play();
  document.querySelectorAll(".drum")[2].classList.add("elementToFadeInAndOut");
  setTimeout(function(){ document.querySelectorAll(".drum")[2].classList.remove("elementToFadeInAndOut"); }, 2000);
}

function d(){
  var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
  document.querySelectorAll(".drum")[3].classList.add("elementToFadeInAndOut");
  setTimeout(function(){ document.querySelectorAll(".drum")[3].classList.remove("elementToFadeInAndOut"); }, 2000);
}

function j(){
  var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
  document.querySelectorAll(".drum")[4].classList.add("elementToFadeInAndOut");
  setTimeout(function(){ document.querySelectorAll(".drum")[4].classList.remove("elementToFadeInAndOut"); }, 2000);
}

function k(){
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
  document.querySelectorAll(".drum")[5].classList.add("elementToFadeInAndOut");
  setTimeout(function(){ document.querySelectorAll(".drum")[5].classList.remove("elementToFadeInAndOut"); }, 2000);
}

function l(){
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
  document.querySelectorAll(".drum")[6].classList.add("elementToFadeInAndOut");
  setTimeout(function(){ document.querySelectorAll(".drum")[6].classList.remove("elementToFadeInAndOut"); }, 2000);
}

document.querySelectorAll(".drum")[0].addEventListener("click", w);
document.querySelectorAll(".drum")[1].addEventListener("click", a);
document.querySelectorAll(".drum")[2].addEventListener("click", s);
document.querySelectorAll(".drum")[3].addEventListener("click", d);
document.querySelectorAll(".drum")[4].addEventListener("click", j);
document.querySelectorAll(".drum")[5].addEventListener("click", k);
document.querySelectorAll(".drum")[6].addEventListener("click", l);


// Keyboard pressed

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 87) {
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    document.querySelectorAll(".drum")[0].classList.add("elementToFadeInAndOut");
    setTimeout(function(){ document.querySelectorAll(".drum")[0].classList.remove("elementToFadeInAndOut"); }, 2000);
  }
  if(e.keyCode == 65){
    var kick_bass = new Audio('sounds/kick-bass.mp3');
    kick_bass.play();
  }
  if(e.keyCode == 83){
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
  }
  if(e.keyCode == 68){
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
  }
  if(e.keyCode == 74){
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
  }
  if(e.keyCode == 75){
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
  }
  if(e.keyCode == 76){
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
  }
});


// Animation
