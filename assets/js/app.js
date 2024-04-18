/* 
  nav bar slides down on home page
  Source: https://www.w3schools.com/howto/howto_js_navbar_slide.asp
*/
//if (window.location.href=="https://jclync.github.io/" || window.location.href=="http://127.0.0.1:5501/") {
  if(document.body.className == 'home-page'){
    window.onscroll = function() {scrollFunction()};
  }
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar-scroll-down").style.top = "0";
      document.getElementById("scroll-up").style.display = "block";
    } else {
      document.getElementById("navbar-scroll-down").style.top = "-100px";
      document.getElementById("scroll-up").style.display = "none";
    }
  }
  
  
  // Hide navbar when scroll down. Show navbar when scroll up.
  // Source : https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
  if (document.body.className != 'home-page') {
    var prevScrollpos = window.scrollY;
  
    document.addEventListener('scroll', (e) => {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("scroll-up").style.display = "block";
      } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("scroll-up").style.display = "none";
      }
      prevScrollpos = currentScrollPos;
    });
  }
  
  /*
    highlight active sidetab on scroll
    Source: https://codepen.io/dbilanoski/pen/LabpzG
  */
  // Get all sections that have an ID defined
  const sections = document.querySelectorAll("section[id]");
  
  // Add an event listener listening for scroll
  if (document.body.id == 'case-study-page') {
    window.addEventListener("scroll", navHighlighter);
  }
  
  function navHighlighter() {
    // Get current scroll position
    let scrollY = window.scrollY;
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      sectionId = current.getAttribute("id");
      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".sidenav a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".sidenav a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
  
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
  const navtabs = document.getElementById("navbar-right");
  const navbar = document.getElementById("navbar");
  
  burger.addEventListener("click", () => {
    navtabs.classList.toggle("show");
  });
  
  // Close hamburger menu when a link is clicked
  
  // Select nav links
  const navLink = document.querySelectorAll(".nav-item");
  
  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      navtabs.classList.remove("show");
    })
  );
  
  /*
    typewriter
    source: https://www.youtube.com/watch?v=upcZ4yCrTy8
    source: https://github.com/tameemsafi/typewriterjs
    source: https://www.npmjs.com/package/typewriter-effect
  */
  if (document.body.className == 'home-page') {
    new Typewriter('#app', {
      strings: [
        "Hello! My name is Jocelyn.", 
        "I am a Seattle-based designer, passionate about empowering people through inclusive design.", 
        "I recently graduated from the University of Washington.",
        "Currently working on a Paint by Numbers while watching my way through Queen of Tears.",
        "Take a look around and get to know me!" 
        ],
      autoStart: true,
      loop: true
    })
  }

  /*
  if (document.body.className == 'uw-cerse-page') {
    // Slider
    const container = document.querySelector('.container-1');
  
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
  }
  */ 

  // Staticrypt close password input form
  if (document.body.className == 'staticrypt-body') {
    const closePassForm = document.getElementById("close");
    closePassForm.addEventListener("click", () => {
      window.location.href = "../index.html"
    });
  }
  
  
  
  /* --------------------------------------------OLD STUFF------------------------------------------------------------------------ */
  
  /*
  typing carousel effect
  source: https://codepen.io/josephwong2004/pen/ExgoKde?editors=1010
  source: https://codepen.io/gschier/pen/DLmXKJ
  
  //html
                      <div class="home-bio hidden">
                          <h1 class="bio-title">Jocelyn Chen</h1>
                          <!-- typed bio -->
                          <div class="typing-container">
                              <span
                                  class="txt-rotate"
                                  data-period="2000"
                                  data-rotate='[
                                      "Hello! My name is Jocelyn.", 
                                      "I am a Seattle-based designer, passionate about empowering people through inclusive design.", 
                                      "I recently graduated from the University of Washington.",
                                      "Currently watching Queen of Tears.",
                                      "Take a look around and get to know me!" 
                                      ]'>
                              </span>
                              <span class="input-cursor"></span>
                          </div>
                      </div> 
  
  
  
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
  
  */
  
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
  source: https://github.com/robinmoisson/static */