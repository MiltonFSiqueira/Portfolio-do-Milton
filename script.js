 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

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

// Fechar o menu ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});


// Função para animar entrada dos cards de tecnologia
function animateTechCards() {
  const cards = document.querySelectorAll('.tecnologia-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Chamar a função quando a página carregar
window.addEventListener('load', animateTechCards);

// Adicionar classe 'active' ao link da navbar quando a seção correspondente estiver visível
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
}

// Chamar a função quando a página rolar
window.addEventListener('scroll', updateActiveNavLink);



















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