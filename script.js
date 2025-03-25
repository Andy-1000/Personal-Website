function myFunction() {
  var x = document.getElementById("nav_bar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const $bigB = document.querySelector('.big');
const $smallB = document.querySelector('.small');
const $hoverables1 = document.querySelectorAll('a');
const $hoverables2 = document.querySelectorAll('.note');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables1.length; i++) {
  $hoverables1[i].addEventListener('mouseenter', onMouseHover);
  $hoverables1[i].addEventListener('mouseleave', onMouseHoverOut);
}

for (let i = 0; i < $hoverables2.length; i++) {
  $hoverables2[i].addEventListener('mouseenter', onMouseHover);
  $hoverables2[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
  TweenMax.to($bigB, .4, {
    x: e.clientX - 23,
    y: e.clientY - 15
  })
  TweenMax.to($smallB, .1, {
    x: e.clientX - 3,
    y: e.clientY - 2
  })
}

function onMouseHover() {
  TweenMax.to($bigB, .3, {
    scale: 0.001
  })
}

function onMouseHoverOut() {
  TweenMax.to($bigB, .3, {
    scale: 1
  })
}


function footnote1() {
  var popup = document.getElementById("foot1");
  popup.classList.toggle("show");
}

function footnote2() {
  var popup = document.getElementById("foot2");
  popup.classList.toggle("show");
}

function footnote3() {
  var popup = document.getElementById("foot3");
  popup.classList.toggle("show");
}

function footnote4() {
  var popup = document.getElementById("foot4");
  popup.classList.toggle("show");
}

function footnote5() {
  var popup = document.getElementById("foot5");
  popup.classList.toggle("show");
}

function footnote6() {
  var popup = document.getElementById("foot6");
  popup.classList.toggle("show");
}

function quote() {
  var popup = document.getElementById("quote");
  popup.classList.toggle("show");
}


let mybutton = document.getElementById("top");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}