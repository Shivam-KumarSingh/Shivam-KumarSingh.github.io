let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const navbar = document.querySelector('.navbar');
    const nightModeToggle = document.querySelector('.night-mode-toggle');
    const body = document.body;

    // Show Slide
    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        const offset = -currentSlide * 100;
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    // Slide Navigation
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }


    // Automatic Slide Transition
    setInterval(nextSlide, 5000);

    // Initialize Carousel
    showSlide(currentSlide);

var typed=new Typed(".typing",{
    strings:["Web Designer","Web Developer","AI Enthusiast",
    "ML Developer","Frontend Developer",
    "Backend Developer",
    "Full Stack Developer","UI/UX Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

const cntbtn=document.getElementById("contactbtn");
cntbtn.addEventListener("click",function(){
    const cnt=document.getElementById("contact");
    cnt.scrollIntoView({behavior:'smooth'});
});
// Select all nav links
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.getElementById("navbarNav");

// Function to hide the navbar menu
function hideNavbar() {
    // Collapse the navbar menu
    if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Trigger the click to close the navbar
    }
}

// Add click event listeners to each nav link
navLinks.forEach(link => {
    link.addEventListener("click", hideNavbar);
});

// Add scroll event listener to hide navbar when scrolling
window.addEventListener("scroll", hideNavbar);

document.querySelector('.submit-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the feedback message element
    const feedbackMessage = document.getElementById('feedback-message');
    
    // Set the message
    feedbackMessage.textContent = "We apologize for the inconvenience! This button isn't functional right now. If you have any questions, please reach out to us via email.";
    
    // Show the message
    feedbackMessage.style.display = 'block';
});

  



