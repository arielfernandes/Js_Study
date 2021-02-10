var myNodelist = document.getElementsByClassName("Box");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var divNova = document.createElement("div")
  divNova.className = "container sm-container"
 
  var row = document.createElement("div")
  row.className = "row"

var colMd = document.createElement("div")
colMd.className = "col-md"

var formCheck = document.createElement("div")
formCheck.className = "form-check Box"


  var conteudoNovo = document.createTextNode("Olá, cumprimentos!")
  
 

  
  var divAtual = document.getElementById("div2");
  document.body.insertBefore(divNova, divAtual);

  //criando elemento checkbox
  var checkbox = document.createElement("input")

  var inputValue = document.getElementById("inputValue").value

  checkbox.className = "form-check-input"
  checkbox.type = "checkbox"
  checkbox.name = "name"
  checkbox.value = "value"
  checkbox.id = "id"
  

  // criando label para o checkbox
  var label = document.createElement('label')

  label.htmlFor = "id"
  
  label.appendChild(document.createTextNode(inputValue))
  
  if(inputValue === '') {
    alert('You must write something')    
  } else {
    divNova.appendChild(row)
    row.appendChild(colMd)
    colMd.appendChild(formCheck)
    formCheck.appendChild(checkbox)
    formCheck.appendChild(label)
  }
  document.getElementById("inputValue").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  formCheck.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
 
}