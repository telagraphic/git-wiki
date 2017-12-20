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
    console.log("search triggered...");
    event.preventDefault();

    // show search results container
    search_section.classList.add('toggle-results');
    // close_button.classList.add('show-close-button');

    // hide menu when searching, reset hamburger to closed
    // if (navmenu.classList.contains("show-menu") === true) {
    //   navmenu.classList.remove("show-menu");
    //   hamburger.classList.remove("is-active")
    // }

  }
});

search_close_button.addEventListener('click', function(event) {
  search_form.classList.remove('toggle-search-form');
  nav.classList.remove('toggle-nav-background');
  search_icon.classList.remove('open');
  search_section.classList.remove('toggle-results');

});
