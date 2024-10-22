 // Inicializar AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', 
    menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
  );
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll Spy para navegação
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  
  lastScroll = currentScroll;
});

// Form submission
const form = document.querySelector('.contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Aqui você pode adicionar sua lógica de envio do formulário
  // Por exemplo, usando fetch para enviar para um backend
  
  const formData = new FormData(form);
  // Simulando envio bem-sucedido
  alert('Mensagem enviada com sucesso!');
  form.reset();
});


















/* let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]')
                .classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


function animateText(element) {
    const text = element.textContent;
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.opacity = '0';
        span.style.transition = `opacity 0.5s ease ${i * 0.05}s`;
        element.appendChild(span);
        setTimeout(() => {
            span.style.opacity = '1';
        }, 50);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h1, h2, h3, h4, p');
    elements.forEach(animateText);
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Fechar o menu ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});*/