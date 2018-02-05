document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (event.ctrlKey && keyName === "m") {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle('show-menu');
    handle.classList.toggle('white-handle');
    circle.classList.toggle('white-circle');
    content_section.classList.toggle('toggle-content');
    nav_icons.classList.toggle('toggle-icons');
  } else if (event.ctrlKey && keyName === "x") {
    search_icon.classList.toggle("open");
    nav_icons.classList.toggle('toggle-icons');
    nav.classList.toggle("nav-full-width");
    search_form.classList.toggle('toggle-search-form');
    nav.classList.toggle('toggle-nav-background');
    search_input.focus();
  } else if (keyName === "Escape") {
    search_form.classList.remove('toggle-search-form');
    nav.classList.remove('toggle-nav-background');
    search_icon.classList.remove('open');
    search_section.classList.remove('toggle-results');
    nav_icons.classList.remove('toggle-icons');
    content_section.classList.remove('toggle-content');
    handle.classList.remove('white-handle');
    circle.classList.remove('white-circle');
    event.preventDefault();
  }



}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  event.preventDefault();
}, false);
