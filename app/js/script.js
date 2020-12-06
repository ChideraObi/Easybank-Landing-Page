const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

//mobile menu animation
btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');
    
    if (header.classList.contains('open')){ //close hamburger menu
        header.classList.remove('open');        
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    } 
    else { //open hamburger menu
        header.classList.add('open'); 
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
    }
});