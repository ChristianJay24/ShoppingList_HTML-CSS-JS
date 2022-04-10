//new item when clicking addbtn
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputBox").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You Add Nothing Bitch!!");
  } else {
    document.getElementById("itemlist").appendChild(li);
  }
  document.getElementById("inputBox").value = "";

  var span = document.createElement("SPAN");
  var remove = document.createTextNode("-");
  span.className = "close";
  span.appendChild(remove);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var remove = document.createTextNode("-");
  span.className = "close";
  span.appendChild(remove);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a check symbol when click
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
