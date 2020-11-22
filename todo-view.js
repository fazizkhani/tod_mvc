
function allertmessage(){
  alert('input is empty');
}
function additem() { 
  new_line[i] = document.createElement('li');
  new_close_button[i]= document.createElement('span');
  new_complet_button[i]= document.createElement('input');
  new_edit_button[i]= document.createElement('button');
  new_line[i].textContent = new_item.value;
  new_line[i].className = 'newLineClass';
  list.appendChild(new_line[i]);  
  new_close_button[i].textContent = "x";
  new_close_button[i].style.cssFloat = "right";
  new_close_button[i].style.color = "red";
  new_close_button[i].style.cursor = "pointer";
  new_close_button[i].className = "new_close_button";
  new_line[i].appendChild(new_close_button[i]);
  new_complet_button[i].type = "checkbox";
  new_complet_button[i].style.cssFloat = "right";
  new_complet_button[i].style.cursor = "pointer";
  new_complet_button[i].className = "new_complete_button_class";
  new_complet_button[i].style.width='3%';
  new_line[i].appendChild(new_complet_button[i]);
  new_edit_button[i].textContent = 'Edit';
  new_edit_button[i].style.cursor = 'pointer';
  new_edit_button[i].style.cssFloat = "right";
  new_edit_button[i].style.fontSize = '15px';
  new_edit_button[i].className = "new_edit_button";
  new_line[i].appendChild(new_edit_button[i]);
  new_input[i]= document.createElement('input');
  new_submit[i]= document.createElement('span');
  new_submit[i].textContent = 'save';
  new_submit[i].style.cursor = 'pointer';
  new_submit[i].style.fontSize = '20px';
  new_submit[i].style.width='5%';
  new_submit[i].style.backgroundColor = 'green'; 
  new_input[i].className = "new_input_edit";
  new_submit[i].className = "new_submit_edit";
  new_complet_button[i].onclick = function(){
      for (let i = 0; i < item_status.length; i++) {
          if (item_status[i].checked == true) {
              new_line_task[i].style.backgroundColor = "grey"; 
          }
          else {
              new_line_task[i].style.backgroundColor = "white"; 
          }
        }
}   
for(let i = 0 ; i< item_status.length; i++){
new_close_button[i].onclick = function(){           
  list.removeChild(new_line_task[i]);} 
  new_edit_button[i].onclick = function(){
  new_edit_button[i].parentElement.appendChild(new_input[i]);
  new_edit_button[i].parentElement.appendChild(new_submit[i]);}
  new_submit[i].onclick = function () {
  new_line[i].textContent = new_input[i].value;
  new_line[i].append(new_close_button[i]);
  new_line[i].append(new_complet_button[i]);
  new_line[i].append(new_edit_button[i]);}
}

i = i+1;
    return new_line,new_close_button,new_complet_button,i;
          
}
    /////filters////
  all_filter.onclick = function () {
      all_filter.style.backgroundColor = 'grey';
      active_filter.style.backgroundColor =  'goldenrod';
      complete_filter.style.backgroundColor = 'green';
      for (let i = 0; i < item_status.length; i++) {
        item_status[i].parentElement.style.display = "block";
      }
    }
    active_filter.onclick = function () {
     
      all_filter.style.backgroundColor = 'cyan';
      active_filter.style.backgroundColor = 'grey';
      complete_filter.style.backgroundColor = 'green';
      for (let i = 0; i < item_status.length; i++) {
        if (item_status[i].checked == false) {
          item_status[i].parentElement.style.display = 'block';
        }
        else {
          item_status[i].parentElement.style.display = 'none';
        }
      }
    }
    complete_filter.onclick = function () {

      all_filter.style.backgroundColor = 'cyan';
      active_filter.style.backgroundColor = ' goldenrod';
      complete_filter.style.backgroundColor = 'grey';
      for (let i = 0; i < item_status.length; i++) {
        if (item_status[i].checked == true) {
          item_status[i].parentElement.style.display = 'block';
        }
        else {
          item_status[i].parentElement.style.display = 'none';
        }
      }
    }
    
var data = (function () {
	var key = 'state';
	return {
		getItems: getItems1,
		setItems: setItems1
	};

	function getItems1() {
		var value = localStorage.getItem(key);
		if (!value) return null;
		return value;
	};

	function setItems1(value) {
		!value && (value = {});
		localStorage.setItem(key, value);
	};
}());
    upload_icon.onclick = function () {
      var myData = data.getItems1();
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          alert('upload done successfully.');
        }
      }
      xhttp.open('POST', "write", true);
      xhttp.setRequestHeader('Content-Type', 'application/json');
      xhttp.send(myData);
    }
    
    download_icon.onclick = function () {
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', "read", true);
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var myData = xhttp.responseText;
          data.setItems1(myData);
         
        }
      };
      xhttp.send();
    }
