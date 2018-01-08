// var menu_button = nav.querySelector('#menu-button');
// var content_section = document.querySelector('#content-section');

menu_button.addEventListener('click', function(event) {
  // var handle = document.querySelector('.handle');
  // var circle = document.querySelector('.circle');
  // var menu = document.querySelector('#menu');
  menu.classList.toggle('show-menu');
  handle.classList.toggle('white-handle');
  circle.classList.toggle('white-circle');

  content_section.classList.toggle('toggle-content');

}, false);

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle("is-active");
}, false);
