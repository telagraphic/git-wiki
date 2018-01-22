menu_button.addEventListener('click', function(event) {
  menu.classList.toggle('show-menu');
  handle.classList.toggle('white-handle');
  circle.classList.toggle('white-circle');
  content_section.classList.toggle('toggle-content');
}, false);

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle("is-active");
}, false);


var nav_menu = document.querySelectorAll(".sub-menu");
console.log(nav_menu);
