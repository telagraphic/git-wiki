var tab_container = document.querySelector('.tabs');
var tab_links = tab_container.querySelectorAll('.tab-links li');
var tabs = tab_container.querySelectorAll('.tab-content');

tab_links.forEach(function(link, index) {
  console.log(link + " " + index);
  link.addEventListener('click', function(event) {
    removeActiveTab();
    tabs[index].classList.add('active-tab');
  });
});

function displayTab() {
  removeActiveTab();
  getTabIndex();
};

function removeActiveTab() {
  tabs.forEach(function(tab) {
    tab.classList.remove("active-tab");
  })
};
