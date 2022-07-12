const navToggle = getElement('.nav-toggle');
const links = getElement('.links');

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})
