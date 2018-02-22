var definition_lists = Array.prototype.slice.call(document.querySelectorAll('.definition-list'));

definition_lists.forEach(function(list) {
  var def_terms = Array.prototype.slice.call(list.querySelectorAll('dl dt'));
  var button = list.querySelector('.hide-show-all');

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
