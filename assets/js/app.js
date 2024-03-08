// scroll to top functionality
const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav bar hamburgerburger menu selections
const burger = document.getElementById("burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-item");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

/*
typing carousel effect
source: https://codepen.io/josephwong2004/pen/ExgoKde?editors=1010
source: https://codepen.io/gschier/pen/DLmXKJ
*/
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  //var delta = 300 - Math.random() * 100;
  var delta = 150; //speed

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};


// Slider
const container = document.querySelector('.container');

document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})


// Slider 2
const container2 = document.querySelector('.container-2');

document.querySelector('.slider-2').addEventListener('input', (e) => {
  container2.style.setProperty('--position', `${e.target.value}%`);
})

// Slider 3
const container3 = document.querySelector('.container-3');

document.querySelector('.slider-3').addEventListener('input', (e) => {
  container3.style.setProperty('--position', `${e.target.value}%`);
})
/*

// password protected case study
const passwordButton = document.getElementById("submit-button");
passwordButton.addEventListener("click", () => {
  if (document.querySelector("input[type=password]").value=="JChen123!") {
    location.href="./robert-half-digital-modernization.html"
  } else {
    alert("Incorrect password. Please try again.")
  }
});

// overlay
const password = document.getElementById("password-protect");
password.addEventListener("click", () => {
  document.getElementById("overlay").style.display = "block";
});

const projectTitle = document.getElementById("password-protect-title")
projectTitle.addEventListener("click", () => {
  document.getElementById("overlay").style.display = "block";
});

const close = document.getElementById("close-overlay");
close.addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
});
*/

/* 
trigger button click on enter
source: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
*/ /*
const passInput = document.getElementById("password-input");
passInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit-button").click();
  }
});*/

/* encrypted html page
source: https://github.com/robinmoisson/staticrypt
*/