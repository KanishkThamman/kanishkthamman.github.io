const modal = document.getElementById("certModal");
const certFrame = document.getElementById("certFrame");
const certLinks = document.querySelectorAll(".cert-link");
const closeBtn = document.querySelector(".close");

certLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const certUrl = this.getAttribute("data-cert");
        if (certUrl.endsWith('.pdf')) {
            certFrame.src = certUrl;
            modal.style.display = "block";
        } else {
            window.location.href = certUrl;
        }
    });
});



// preloader animation

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.container'); // Adjust this selector to match your main content container
  
    // Hide the content initially
    content.style.opacity = '0';
    content.style.transition = 'opacity 0.5s ease';
  
    window.addEventListener('load', function() {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        content.style.opacity = '1';
      }, 1000); // Adjust this delay as needed
    });
  });
  