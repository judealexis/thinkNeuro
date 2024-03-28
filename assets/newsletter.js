var modal = document.getElementById("myModalNews");

// Get the button that opens the modal
var btn = document.getElementsByClassName("ctaBtn");
var submitBtn = document.getElementById("submitBtn");

//inputs
var fnameInput = document.getElementById("fname");
var lnameInput = document.getElementById("lname");
var emailInput = document.getElementById("email");

var educationStatus = document.getElementById("educationStatus");

//currently display = none
var errorMessage = document.getElementById("modalError");

// When the user clicks the button, open the modal 
function openModal() {
  // modal.style.display = "block";
  window.location.href = "https://think-neuro.ck.page/newsletter-signup-lp";
}

window.addEventListener('DOMContentLoaded', function() {
    for(let i=0; i < btn.length; i++){
        btn[i].addEventListener('click', openModal);
    }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

submitBtn.onclick = function() {
    // Validation
    if (!validateEmail(emailInput.value) || 
        educationStatus.value === "blank" || 
        fnameInput.value.trim() === "" || 
        lnameInput.value.trim() === "") {
        
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please fill all fields correctly.";

        return;
    }

    errorMessage.style.display = "none"; 
    modal.style.display = "none"; 

    fetch('https://api.convertkit.com/v3/forms/6320168/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        api_key: 'egDs9fwkrVp9vnVVq3JsPw',
        email: emailInput.value,
        first_name: fnameInput.value,
        last_name: lnameInput.value,
        education_status: educationStatus.value
      })
    })
    .then(response => response.json()) 
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


    window.location.href = "/ty.html";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
