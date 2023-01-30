const menu = document.getElementById('menu');
const open = document.getElementById('open-menu');
const shut = document.getElementById('close-menu');
const links = document.querySelectorAll('.navlink');
shut.style.display = 'none';

open.addEventListener('click', () => {
  menu.style.left = '0%';
  shut.style.display = 'block';
  open.style.display = 'none';
});

shut.addEventListener('click', () => {
  menu.style.left = '-100%';
  shut.style.display = 'none';
  open.style.display = 'block';
});

links.forEach((btn) => {
  btn.addEventListener('click', () => {
    menu.style.left = '-100%';
    shut.style.display = 'none';
    open.style.display = 'block';
  });
});