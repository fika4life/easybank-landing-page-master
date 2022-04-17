const menuBar = document.querySelector('.menu-bar');

const menuNav = document.querySelector('.main-nav');

function toggleActive() {
  menuBar.classList.toggle('is-active');

  if (menuBar.classList.contains('is-active')) {
    menuNav.style.display = 'flex';
  } else {
    menuNav.style.display = 'none';
  }
}

document.addEventListener('click', toggleActive);
