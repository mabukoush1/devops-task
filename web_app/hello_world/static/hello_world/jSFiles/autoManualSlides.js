var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].style.display = "block";
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }  
    dots[slideIndex-1].className += " active"; //Remove the space and see its consequence.
    setTimeout(showSlides, 8000); // Change image every 5 seconds for each Recursive function
  }