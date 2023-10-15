const firstHeader = document.querySelector("#firstHeader");
const secHeader = document.querySelector("#secHeader");
const firstP = document.querySelector("#firstP");

const pic1 = document.querySelector("#pic1");
const secP = document.querySelector("#secP");

const learnMore = document.getElementsByName("learnMore");

var acc = document.getElementsByClassName("accordion");
var i;

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


  for (let i = 0; i < learnMore.length; i++) {
    const element = learnMore[i];
    let learnMoresize = (20 * Math.log10(element.offsetWidth/207))+20;
    element.style.fontSize = learnMoresize.toString() + "px";
    if(i>0){element.style.fontSize = (learnMoresize+5).toString() + "px";}
  }

  if(viewportWidth < 1400){

    let headerPsize = 23 * (viewportWidth/1400);
    let cardHeaderSize = 30 * (viewportWidth/1400);

    let headerSize = headerPsize * (17/23);
    let secHeaderSize = headerPsize * (20/23);

    let pic1Width = ((340 * (viewportWidth/1400)) >= 130) ? (340 * (viewportWidth/1400)) : 130;
    let pic1Height = pic1Width / (340/(440));
    
    pic1.style.width = pic1Width.toString() + "px";
    pic1.style.height = pic1Height.toString() + "px";

    firstP.style.fontSize = (headerPsize >= 15) ? (headerPsize.toString() + "px") : "15px";
    firstHeader.style.fontSize = (headerSize >= 12) ? (headerSize.toString() + "px") : "12px";

    secHeader.style.fontSize = (secHeaderSize >= 8) ? (secHeaderSize.toString() + "px") : "8px";
    secP.style.fontSize = (headerPsize >= 10) ? (headerPsize.toString() + "px") : "10px";

  } else{
    firstP.style.fontSize = "23px";
    secP.style.fontSize = "23px";

    firstHeader.style.fontSize = "17px";
    secHeader.style.fontSize = "20px";

    pic1.style.width = "340px";
    pic1.style.height = "440px";
  }

  if(viewportWidth < 500){} else{}
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