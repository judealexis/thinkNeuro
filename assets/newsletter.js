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
    window.location.href = "/ty.html";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}