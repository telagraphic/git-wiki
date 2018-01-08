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

search_input.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    // show search results container
    search_section.classList.add('toggle-results');
    search_close_button.classList.add('toggle-search-results');

    // hide menu when searching
    if (menu.classList.contains('show-menu')) {
      menu.classList.remove('show-menu');
      hamburger.classList.remove("is-active");
    }
  }
});

search_close_button.addEventListener('click', function(event) {
  search_form.classList.remove('toggle-search-form');
  nav.classList.remove('toggle-nav-background');
  search_icon.classList.remove('open');
  search_section.classList.remove('toggle-results');
  nav_icons.classList.remove('toggle-icons');
  content_section.classList.remove('toggle-content');
  handle.classList.remove('white-handle');
  circle.classList.remove('white-circle');
  event.preventDefault();
});
