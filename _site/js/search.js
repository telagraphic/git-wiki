search_input.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    console.log("search triggered...");

    // show search results container
    search_section.classList.add('show-results');
    // close_button.classList.add('show-close-button');

    // hide menu when searching, reset hamburger to closed
    // if (navmenu.classList.contains("show-menu") === true) {
    //   navmenu.classList.remove("show-menu");
    //   hamburger.classList.remove("is-active")
    // }

  }
});
