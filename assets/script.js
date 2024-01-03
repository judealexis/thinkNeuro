const image = document.querySelector("#divers");
const text = document.querySelector(".content-container");

const videos = document.querySelector(".video-container");

const sections = document.getElementsByName("responsiveSec");
var acc = document.getElementsByClassName("accordion");

const imageTwo = document.getElementsByClassName("sponsImg");
const imageThree = document.getElementsByClassName("testImg");

const imageContainer = document.getElementsByClassName("spacedLogos");

const showMoreBtns = document.getElementsByClassName('seeMoreBtn');
const projectContainer = document.getElementsByClassName('project-container');

var myListenerMain = [];
var myListenerSub = [];
var i;


try{

  $(function() {
    $(".moreBtn").tooltip({
        items: ".moreBtn[disabled]",
        content: "Application is closed."
    });
  });

} catch{};

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function fitContent(){

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if(viewportWidth < 1150){
    for (i = 0; i < sections.length; i++) {
      sections[i].style.minWidth = "490px";
    }

    try{
      for (i = 0; i < projectContainer.length; i++) {
        projectContainer[i].style.gridTemplateColumns = "auto";
      }
    }catch{};

    try{
      text.style.minWidth = "200px";
      image.src = "assets/image/missionStretch.jpeg";

      for (i = 0; i < imageContainer.length; i++) {
        imageContainer[i].style.flexDirection = "column";
      }

      for (i = 0; i < imageTwo.length; i++) {
        imageTwo[i].style.maxHeight = "50px";
        imageTwo[i].style.maxWidth = "200px";
      }

      for (i = 0; i < imageThree.length; i++) {
        imageThree[i].style.maxWidth = "300px";
      }

    }catch{}

    try{videos.style.gridTemplateColumns = "auto auto";}catch{}

  } else{
    for (i = 0; i < sections.length; i++) {
      sections[i].style.minWidth = "1100px";
    }

    try{
      for (i = 0; i < projectContainer.length; i++) {
        projectContainer[i].style.gridTemplateColumns = "auto auto";
      }
    }catch{};

    try {
    text.style.minWidth = "600px";
    image.src = "assets/image/mission.jpeg";

    for (i = 0; i < imageContainer.length; i++) {
      imageContainer[i].style.flexDirection = "row";
    }

    for (i = 0; i < imageTwo.length; i++) {
      imageTwo[i].style.maxHeight = "70px";
      imageTwo[i].style.maxWidth = "none";
    }

    for (i = 0; i < imageThree.length; i++) {
      imageThree[i].style.maxWidth = "350px";
    }

    }catch{}
    try{videos.style.gridTemplateColumns = "auto auto auto";}catch{}
  }

  if(viewportWidth < 930){
    try{videos.style.gridTemplateColumns = "auto";}
  catch{};}
  if(viewportWidth < 500){
    for (i = 0; i < sections.length; i++) {
      sections[i].style.minWidth = "95%";
    }
    try{}catch{};
  }
}

document.addEventListener("DOMContentLoaded", fitContent);
window.addEventListener("resize", fitContent);

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
    var delta = 300 - Math.random() * 100;
  
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
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };