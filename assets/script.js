const image = document.querySelector("#divers");
const text = document.querySelector(".content-container");

const videos = document.querySelector(".video-container");

const sections = document.getElementsByName("responsiveSec");
var acc = document.getElementsByClassName("accordion");

const imgOne = document.querySelector("#imgOne");
const imgTwo = document.querySelector("#imgTwo");
const imgThree = document.querySelector("#imgThree");

const showMoreBtns = document.getElementsByClassName('seeMoreBtn');


var i;

try{

  $(function() {
    $(".moreBtn").tooltip({
        items: ".moreBtn[disabled]",
        content: "Application is closed."
    });
  });

} catch{};

try{
  for (i = 0; i < showMoreBtns.length; i++) {
    const showMoreBtn = showMoreBtns[i];
    
    showMoreBtn.addEventListener('click', function() {
      const contentDiv = showMoreBtn.parentNode.childNodes[4];
      
      // Check the current style of the content div
      if (contentDiv.style.maxHeight === '220px' || contentDiv.style.maxHeight === '') {
          contentDiv.style.maxHeight = '1000px';
          contentDiv.classList.add('no-gradient');
          this.innerHTML = 'See Less';
          
      } else {
          // If content is expanded, collapse it
          contentDiv.style.maxHeight = '220px';
          contentDiv.classList.remove('no-gradient');
          // Change the button text back to "See More"
          this.innerHTML = 'See More';
      }
    });
    
  }
}catch{};

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
      text.style.minWidth = "200px";
      image.src = "assets/image/stretchedDiversity.png";
    }catch{}
    try{videos.style.gridTemplateColumns = "auto auto";}catch{}
    try {
      imgOne.src = "assets/image/projOneStretch.png";
      imgTwo.src = "assets/image/projTwoStretch.png";
      imgThree.src = "assets/image/projThreeStretch.png";
    } catch{}

  } else{
    for (i = 0; i < sections.length; i++) {
      sections[i].style.minWidth = "1100px";
    }
    try {
    text.style.minWidth = "600px";
    image.src = "assets/image/mission.jpeg";
    }catch{}
    try{videos.style.gridTemplateColumns = "auto auto auto";}catch{}
    try {
      imgOne.src = "assets/image/lit.jpg";
      imgTwo.src = "assets/image/opioid.jpg";
      imgThree.src = "assets/image/lang.jpg";
    } catch{}
  }

  if(viewportWidth < 930){videos.style.gridTemplateColumns = "auto";}
  if(viewportWidth < 500){}
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