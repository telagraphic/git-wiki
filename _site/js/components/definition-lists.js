var definition_lists = document.querySelectorAll('.definition-list');

definition_lists.forEach(function(list) {
  var def_terms = list.querySelectorAll('dl dt');
  var button = list.querySelector('.hide-show-all');
  console.log(def_terms);

  button.addEventListener('click', function(event) {
    def_terms.forEach(function(term) {
      console.log(term.nextElementSibling);
      term.nextElementSibling.classList.toggle('show-data-definition');
    });
  })

  def_terms.forEach(function(term) {
    term.addEventListener('click', function(event){
      var data_def = this.nextElementSibling;
      data_def.classList.toggle('show-data-definition');
    }, false);
  });
});
