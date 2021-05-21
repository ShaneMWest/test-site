let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/clearance-items-banner-1.jpg'){
        myImage.setAttribute('src','images/ATLASHeader.jpeg');
    } else {
        myImage.setAttribute('src','images/clearance-items-banner-1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Welcome to Atlas Tools and Machinery, ' + myName + '!';
    }
}

//When there is no user (e.g. at first site access), prompts for user name entry.
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Atlas Tools and Machinery, ' + storedName + '!';
}

//On clicking the button, prompts user to enter their name.
myButton.onclick = function() {
    setUserName();
}