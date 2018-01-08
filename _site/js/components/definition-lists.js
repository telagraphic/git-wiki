var definition_lists = document.querySelector('.definition-list');
var def_terms = definition_lists.querySelectorAll('dt');

for(var i = 0; i < def_terms.length; i++) {
  def_terms[i].addEventListener('click', function(event){
    var data_def = this.nextElementSibling;
    data_def.classList.toggle('show-data-definition');
  }, false);
}
