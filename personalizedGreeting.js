
// Get the heading element
var myHeading = document.querySelector('h1');

function setUserName() {
    var userName = prompt("What is your name?", "");
    localStorage.setItem('name', userName);

    myHeading.textContent = 'Welcome to ' + userName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedUserName = localStorage.getItem('name');
    
    myHeading.textContent = 'Welcome to ' + storedUserName; 
}

document.querySelector('button').onclick = setUserName;
