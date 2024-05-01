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
        "I am a Seattle-based designer, striving to empower people through opening up space at the table.", 
        "I recently graduated from the University of Washington, where I studied Human Centered Design & Engineering.",
        "Currently working on a Paint by Numbers while watching my way through Queen of Tears.",
        "Take a look around and get to know me!" 
        ],
      autoStart: true,
      loop: true
    })
  }