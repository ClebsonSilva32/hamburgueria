// Seleciona elementos
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li a');

// Abre/fecha o menu ao clicar no ícone
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

// Fecha o menu ao clicar em algum link (mobile)
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo');
  });
});

// Adiciona classe 'scroll' ao header quando rolar a página
const header = document.querySelector('header.container');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});
