// Slide for nav bar menu button
// let navSlide = ()=> {
//     let  burger = document.querySelector('.burger');
//     let nav = document.querySelector('.nav-links');
//     let closeIcon = document.querySelector("img.menu-close");
//     let navLinks = document.querySelectorAll('.nav-links li');

//     //Nav Toggler for menu
//     burger.addEventListener('click', ()=> {
//         nav.classList.toggle('nav-active');
//     });
//     for (let x = 0; x < closeIcon.length; x++) {
    
    
//         closeIcon[x].addEventListener("click", function () {
            
//             burger.classList.remove("ul");
//             nav.classList.remove("ul");
    
    
//         });
        
//     }
    
// }
// // Slide close 
// navSlide();

//scroll function for window
const goToTopButton = document.querySelector('.gotopbtn');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
if (window.pageYOffset > 100) { // goToTopButton
    goToTopButton.style.display = "block";
}
else{
    goToTopButton.style.display = "none";
}
}




$(".txtb input").on("focus", function(){
    $(this).addClass("focus");
 });
 Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};

// var top = document.getElementsByClassName( '.about' ).documentOffsetTop() - ( window.innerHeight / 2 );
// window.scrollTo( 0, top );


