function changeMenu() {
    var navs = document.querySelector("nav")
    if (!navs.classList.contains("hidden")){
        navs.classList.add("hidden");
    } else {
        navs.classList.remove("hidden");
    }

}

function unhideMenu() {
    console.log("working")
    var navs = document.querySelector("nav");
    if (navs.classList.contains("hidden") && window.innerWidth >= 750) {
        navs.classList.remove("hidden")
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
