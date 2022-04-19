const menuBar = document.querySelector('.menu-bar');

const menuNav = document.querySelector('.main-nav');

function toggleActive() {
  menuBar.classList.toggle('is-active');

  if (window.matchMedia('(max-width: 650px)')) {
    if (menuBar.classList.contains('is-active')) {
      menuNav.style.display = 'flex';
    } else {
      menuNav.style.display = 'none';
    }
  } else if (window.matchMedia('(min-width: 651px)')) {
    menuNav.style.display = 'flex';
  }
}

document.addEventListener('click', toggleActive);
