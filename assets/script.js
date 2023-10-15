const firstHeader = document.querySelector("#firstHeader");
const firstP = document.querySelector("#firstP");

const secHeader = document.querySelector("#secHeader");
const ourProjects = document.querySelector(".ourProjects");
const titleFour = document.querySelector("#titleFour");

const programDisc = document.getElementsByClassName("programDisc"); 

const secP = document.querySelector("#secP");
const pic1 = document.querySelector("#pic1");

const bodyContainer = document.querySelector(".body-container");

const learnMore = document.getElementsByName("learnMore");

const container = document.querySelector(".container");

const cardP = document.getElementsByClassName("cardP"); 
const cardPemphasis = document.getElementsByClassName("cardPemphasis"); 
const cardImages = document.getElementsByClassName("cardImages"); 

const cardHeader = document.getElementsByClassName("cardHeaders");

const removeClass = document.querySelector("#removeClass");

const root = document.documentElement;

function fitContent(){

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;


  for (let i = 0; i < learnMore.length; i++) {
    
    const element = learnMore[i];
    let learnMoresize = (16 * Math.log10(element.offsetWidth/207))+16;
    element.style.fontSize = (learnMoresize+1).toString() + "px";
    if(i>0){element.style.fontSize = (learnMoresize).toString() + "px";}
  }

  bodyContainer.style.width = (viewportWidth < 1300) ? "100%" : "70%";

  let containerWidth = (.6 * (1792/viewportWidth)) * 100;
  container.style.width = (containerWidth < 75) ? containerWidth.toString() + "%": "75%";

  let containerHeight = ((30 * Math.log10(1792/viewportWidth)) + 30);
  root.style.setProperty('--cardHeight', containerHeight.toString() +'vw');

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

    ourProjects.style.fontSize = (secHeaderSize >= 12) ? (secHeaderSize.toString() + "px") : "12px";

    titleFour.style.fontSize = (secHeaderSize >= 12) ? (secHeaderSize.toString() + "px") : "12px";

    for (let i = 0; i < cardHeader.length; i++) {
      const element = cardHeader[i];
      element.style.fontSize = (cardHeaderSize.toString() + "px");
    }

    for (let i = 0; i < programDisc.length; i++) {
      const element = programDisc[i];
      element.style.fontSize = (secHeaderSize >= 12) ? (secHeaderSize.toString() + "px") : "12px";
    }

    for (let i = 0; i < cardImages.length; i++) {
      const element = cardImages[i];

      let picCardWidth = (.5 * (viewportWidth/1400))*100;
      element.style.width = (picCardWidth >= 39) ? (picCardWidth.toString() + "%") : "39%";
      element.style.height = (picCardWidth >= 39) ? (picCardWidth.toString() + "%") : "39%";
    }

    for (let i = 0; i < cardP.length; i++) {
      const element = cardP[i];
      element.style.fontSize = (secHeaderSize >= 7) ? (secHeaderSize.toString() + "px") : "7px";
      
    }

    for (let i = 0; i < cardPemphasis.length; i++) {
      const element = cardPemphasis[i];
      let emphasisSize = 15 * (secHeaderSize/20);
      element.style.fontSize = (emphasisSize >= 5) ? (emphasisSize.toString() + "px") : "5px";
    }

    secP.style.fontSize = (headerPsize >= 10) ? (headerPsize.toString() + "px") : "10px";

  } else{
    firstP.style.fontSize = "23px";
    secP.style.fontSize = "23px";
    firstHeader.style.fontSize = "17px";
    secHeader.style.fontSize = "20px";
    titleFour.style.fontSize = "20px";
    ourProjects.style.fontSize = "20px";

    for (let i = 0; i < cardHeader.length; i++) {
      const element = cardHeader[i];
      element.style.fontSize = "30px";
    }

    for (let i = 0; i < programDisc.length; i++) {
      const element = programDisc[i];
      element.style.fontSize = "20px";
    }

    for (let i = 0; i < cardImages.length; i++) {
      const element = cardImages[i];

      element.style.width = "50%";
      element.style.height = "50%";
    }

    for (let i = 0; i < cardP.length; i++) {
      const element = cardP[i];
      element.style.fontSize = "20px";
    }

    for (let i = 0; i < cardPemphasis.length; i++) {
      const element = cardPemphasis[i];
      element.style.fontSize = "15px";
    }

    pic1.style.width = "340px";
    pic1.style.height = "440px";
  }

  if(viewportWidth < 500){
    removeClass.className = "deleted";
  } else{
    removeClass.className = "body-container";
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