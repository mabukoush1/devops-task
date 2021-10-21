  // Auto slide
  // var slideIndexb1 = 0;
  // showSlidesb1();
  
  // function showSlidesb1() {
    
  //   var slidesb1 = document.getElementsByClassName("mySlidesb1");
  //   var dotsb1 = document.getElementsByClassName("dotb1");
  //   for (let i = 0; i < slidesb1.length; i++) {
  //     slidesb1[i].style.display = "none";
  //   }
    
  //   slideIndexb1++;
  //   if (slideIndexb1 > slidesb1.length) slideIndexb1 = 1;
  //   slidesb1[slideIndexb1-1].style.display = "block";
  //   for (let i = 0; i < dotsb1.length; i++) {
  //     dotsb1[i].className = dotsb1[i].className.replace("activeb1", "");
  //   }  
  //   dotsb1[slideIndexb1-1].className += " activeb1"; //Remove the space and see its consequence.
  //   setTimeout(showSlidesb1, 3000); // Change image every 5 seconds for each Recursive function
  // }



  
//   // manual slide
//   var slideIndexb1 = 1;
//   showSlidesb1(slideIndexb1);
  
//   function plusSlidesb1(n) {
//     showSlidesb1(slideIndexb1 += n);
//   }
  

//   function showSlidesb1(n) {
//     var i;
//     var slidesb1 = document.getElementsByClassName("mySlidesb1");
//     var dotsb1 = document.getElementsByClassName("dotb1");
//     if (n > slidesb1.length) {slideIndexb1 = 1}    
//     if (n < 1) {slideIndexb1 = slidesb1.length}
//     for (i = 0; i < slidesb1.length; i++) {
//         slidesb1[i].style.display = "none";  
//     }
//     for (i = 0; i < dotsb1.length; i++) {
//         dotsb1[i].className = dotsb1[i].className.replace(" activeb1", "");
//     }
//     slidesb1[slideIndexb1-1].style.display = "block";  
//     dotsb1[slideIndexb1-1].className += " activeb1";
//   }




// function nextSlideb1() {
//   plusSlidesb1(1);
// }

// function prevSlideb1() {
//   plusSlidesb1(-1);
// }

// document.querySelector(".prevb1").addEventListener("click", prevSlideb1);
// document.querySelector(".nextb1").addEventListener("click", nextSlideb1);


import { tns } from "../tiny-slider-master/src/tiny-slider";
document.addEventListener("DOMContentLoaded", init, false); // Initialise the DOM Environment
	
function init() {
    window.addEventListener("load", startSlider, false);
}

function startSlider() {

  const slider = tns({
    container: '.my-slider',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,    
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#customize-controls",
    responsive: {
        640: {
            items: 2,
        },
        
        768: {
            items: 3,
        }
    }

  });

    
}
