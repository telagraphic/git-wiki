var nav = document.querySelector('nav');
var nav_icons = nav.querySelector('ul');
var search_button = nav.querySelector('#search-button');
var search_form = nav.querySelector('#search-form');
var search_icon = nav.querySelector('a.search-icon');
var search_input = document.querySelector('#tipue_search_input');
var search_section = document.querySelector('#search-section');
var search_content = document.querySelector('#tipue_search_content');
var menu_button = nav.querySelector('#menu-button');
var hamburger = nav.querySelector(".hamburger");
var menu = document.querySelector('#menu');

nav_icons.addEventListener('mouseenter', function(event) {
  nav_icons.classList.add('toggle-icons');
}, false);

nav_icons.addEventListener('mouseleave', function(event) {
  var menu = document.querySelector('#menu');
  var search_form = nav.querySelector('#search-form');
  var nav_icons = nav.querySelector('ul');
  if (menu.classList.contains('show-menu')) {
    nav_icons.classList.add('toggle-icons');
  } else  {
    nav_icons.classList.remove('toggle-icons');
  }

  if (search_form.classList.contains('toggle-search-form')) {
    nav_icons.classList.add('toggle-icons');
  } else  {
    nav_icons.classList.remove('toggle-search-form');
  }

}, false);

menu_button.addEventListener('click', function(event) {
  var menu = document.querySelector('#menu');
  menu.classList.toggle('show-menu');
}, false);

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle("is-active");
}, false);

search_button.addEventListener('click', function(event) {
  search_form.classList.toggle('toggle-search-form');
  nav.classList.toggle('toggle-nav-background');
  search_input.focus();
});

search_icon.addEventListener('click', function(event) {
  this.classList.toggle("open");
}, false);

search_input.addEventListener('focus', function() {
  this.setAttribute("placeholder", "");
});
