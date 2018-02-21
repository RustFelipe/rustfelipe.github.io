var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jiujitsu.jpg') {
      myImage.setAttribute ('src','images/dog.jpg');
    } else {
      myImage.setAttribute ('src','images/jiujitsu.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Jiu Jitsu is awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Jiu Jitsu is awesome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
