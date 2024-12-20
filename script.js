$(document).ready(function () {
     $("nav a").hover(function () {
       $(this).css("color", "#00bcd4");
     }, function () {
       $(this).css("color", "#fff");
     });
   
     // Smooth scrolling for navigation
     $("nav a").on("click", function (e) {
       if (this.hash !== "") {
         e.preventDefault();
         const hash = this.hash;
         $("html, body").animate({
           scrollTop: $(hash).offset().top
         }, 800);
       }
     });
   });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
   
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
