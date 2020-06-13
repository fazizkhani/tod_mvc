function todo() {
  var newitem = document.getElementById('input');
  var newrow = document.createElement('li');
  var list = document.getElementById('list');
  newrow.textContent = newitem.value;
  list.prepend(newrow);
}
            
           
     