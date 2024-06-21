// menu icon//
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// sticky navbar//
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']' ).classList.add('active');
            })
        }
    })
}


const header = document.querySelector('.header');
const navText = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 450) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

menuicon.classList.remove('bx-x');
navbar.classList.remove('active');

// dark light modee/////

let darkmodeicon = document.querySelector('#darkmode-icon');

darkmodeicon.onclick = () => {
  darkmodeicon.classList.toggle('bx-sun')
  document.body.classList.toggle('dark-mode');
}

// efek scrol
ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading, .cv',{ origin: 'top'});

  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, contact form',{ origin: 'top'});

  ScrollReveal().reveal('.home-content h1, .about-img img ',{ origin: 'left'});

  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',{ origin: 'right'});

  // popup alert

  document.getElementById("btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")
    [0].classList.add("active");
  });