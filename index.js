// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7 ");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var categoryValue = document.getElementById("myCategory").value;
  var t = document.createTextNode(inputValue);

  var icon = document.createElement("I");
  if (categoryValue === "Personal") {
    icon.className = "fas fa-user";
  } else if (categoryValue === "Books to read") {
    icon.className = "fas fa-book";
  } else if (categoryValue === "To Buy") {
    icon.className = "fas fa-shopping-cart";
  }

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.appendChild(icon);
    li.append(" ");
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var closeSpan = document.createElement("SPAN");
  var closeTxt = document.createTextNode("\u00D7");
  closeSpan.className = "close";
  closeSpan.appendChild(closeTxt);
  li.appendChild(closeSpan);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

