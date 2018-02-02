var tab_container, tab_links, tabs;

// code for multiple tabs
if (document.querySelector('.tabs') !== null) {
  tab_container = document.querySelector('.tabs');
  tab_links = tab_container.querySelectorAll('.tab-links li');
  tabs = tab_container.querySelectorAll('.tab-content');

  tab_links.forEach(function(link, index) {
    link.addEventListener('click', function(event) {
      removeActiveTab();
      this.classList.add('active-tab-link');
      tabs[index].classList.add('active-tab');
    });
  });

  // remove active tab status
  function removeActiveTab() {
    tabs.forEach(function(tab) {
      tab.classList.remove("active-tab");
    })

    tab_links.forEach(function(link) {
      link.classList.remove("active-tab-link");
    })
  };
}
