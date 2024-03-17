var modal = document.getElementById("myModalNews");

// Get the button that opens the modal
var btn = document.getElementsByClassName("ctaBtn");
var submitBtn = document.getElementById("submitBtn");

// When the user clicks the button, open the modal 
function openModal() {
  modal.style.display = "block";
}

window.addEventListener('DOMContentLoaded', function() {
    for(let i=0; i < btn.length; i++){
        btn[i].addEventListener('click', openModal);
    }
});

submitBtn.onclick = function() {
    modal.style.display = "none";
    document.body.innerHTML = `

    <div class="navbar">
        <a href="index.html" class="active">Home</a>
        <a href="about.html">About</a>
        <div class="dropdown">
            <button class="dropbtn">Programs 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="volunteer.html">Volunteer</a>
              <a href="internship.html">Internships</a>
              <a href="research.html">Research</a>
              <a href="#">Hackathon</a>
            </div>
          </div> 
        <a href="faq.html">FAQs</a>
    </div>

    <div id="container"> 
        <div id="newsHeaderBGSuc">
            <div class="Title">
                <div id="newsHeader">
                    <p id="newsTitleTxtCTA">
                        <span id="whiteTxt">Your</span>
                        <span id="lightTxt">free guide</span>
                        <span id="whiteTxt">is on its way to your</span>
                        <span id="lightTxt">inbox!</span>
                    </p>
                    
                    <img id="sucessImg" src="assets/image/celebration.png">
                    
                </div>
            </div>
        </div>
    </div>

    <div class="row">

        <section class="newsContSec">
            <section class="standardReact" id="news-hook">
                <p id="newsTitleTxt">
                    <span id="number"> Start accessing resources now</span>
                    <span id="titleP">for your journey, or hang tight until Friday!</span>
                </p>
            </section>

            <section class="standardReact" id="opposed-image">
                <div class="opposed-image-container">
                    <img src="assets/image/phoneWoman.png" alt="Diversity Image">
                </div>
                <div class="opposed-content-container">
                    <p class="imageTxt-right">
                        <span id="number"> Free Guides</span>
                        <span id="normalP"> 
                            We collected all our best free resources in one place for you. As new options arrive 
                            you will see them right in the newsletter!
                        </span>
                    </p>
                </div>
            </section>

            <section class="standardReact" id="opposed-image">
                <div class="opposed-content-container">
                    <p class="imageTxt-left">
                        <span id="number"> Premium Resources</span>
                        <span id="normalP"> 
                            The choice to invest in yourself and your future is invaluable. While free resources are good, 
                            we share the premium services that have made all the difference for thousands of students.
                        </span>
                    </p>
                </div>
                <div class="opposed-image-container">
                    <img src="assets/image/screenMan.png" alt="Diversity Image">
                </div>
            </section>

        </section>

        <section class="newsCTASec">
            <section class="standardReact" id="news-cta">
                <p id="newsTitleTxtCTA">
                    <span id="whiteTxt">We have</span>
                    <span id="lightTxt">gifts for you</span>
                    <span id="whiteTxt">when you</span>
                    <span id="lightTxt">share</span>
                    <span id="whiteTxt">our newsletter with friends.</span>
                </p>
            </section>
        </section>

        <section class="newsContSec">
            <section class="standardReact" id="news-hookMOD">
                <p id="compareHeader">
                    <span id="compareHeader-title"> Think Neuro Referral Program</span>
                    <br></br>
                    <span id="normalP"> We want to provide our resources to as many people as possible, </span>
                    <span id="emphP">students and parents alike.</span>
                    <br></br>
                    <span id="normalP">When you help us in our mission by sharing your unique referral link, we'll send you</span>
                    <span id="emphP">free stuff!</span>
                    <br></br>
                    <span id="normalP">Each week, you'll see what</span>
                    <span id="emphP">rewards you can claim</span>
                    <span id="normalP">when you share our newsletter with friends and family that join our newsletter!</span>
                </p>
            </section>

            <section class="standardReact" id="opposed-image">
                <div class="opposed-image-container">
                    <img src="assets/image/giftLady.png" alt="Diversity Image">
                </div>
                <div class="opposed-content-container">
                    <p class="imageTxt-left">
                        <div id="compareColumnTxt"> Rewards include... </div>
                        <ul id="listOfOptions">
                            <li>Premium Guide to Starting Your Own Nonprofit</li>
                            <li>Executive Coaching Session</li>
                            <li>Think Neuro Merchandise</li>
                            <li>Discounts for Speciality Services</li>
                            <li>And Much More!</li>
                        </ul>
                    </p>
                </div>
            </section>

        </section>

        <section class="newsCTASec">
            <section id="news-cta">
                <p id="newsTitleTxtCTA">
                    <span id="whiteTxt">Contact our team to learn more about</span>
                    <span id="lightTxt">free rewards</span>
                </p>
            </section>
        </section>

        <section class="greyMod">
            <div class="subContainer" name="responsiveSec">
                <h3 id="contactHeader">CONTACT US</h3>
                <p id="contactDisc">For more information or inquiries, feel free to reach out to us:</p>
                
                <div class="contactInfo">
                    <span class="infoText"><a href="mailto:thinkneuro.usa@gmail.com" target="_blank" class="infoText"><i class="fas fa-envelope"></i>thinkneuro.usa@gmail.com</a></span>
                </div>

                <div class="contactInfo">
                    <a href="https://www.linkedin.com/company/thinkneurousa/" target="_blank" class="infoText"><i class="fab fa-linkedin"></i>ThinkNeuroUSA</a>
                </div>
        
                <div class="contactInfo">
                    <a href="https://www.instagram.com/thinkneuro.usa/" target="_blank" class="infoText"><i class="fab fa-instagram"></i>thinkneuro.usa</a>
                </div>

                <div class="contactInfo">
                    <a href="http://youtube.com/@ThinkNeuroUSA" target="_blank" class="infoText"><i class="fab fa-youtube"></i>@ThinkNeuroUSA</a>
                </div>
            </div>
        </section>
        

    </div>

    <div class="footer">
    <h2 id="copyright">© Think Neuro 2024-2025</h2>
    </div>
    `;

    window.scrollTo(0, 0);
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}