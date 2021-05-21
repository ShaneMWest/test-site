let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/clearance-items-banner-1.jpg'){
        myImage.setAttribute('src','images/ATLASHeader.jpeg');
    } else {
        myImage.setAttribute('src','images/clearance-items-banner-1.jpg');
    }
}