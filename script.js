var slideIndex = 0; // Startindex for billedkarrusellen

// Funktionen til at vise næste billede
function showNextSlide() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Skjul alle billeder
  }
  slideIndex++; // Øg slide-indekset
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } // Start forfra, når vi når slutningen
  slides[slideIndex - 1].style.display = "block"; // Vis det aktuelle billede
  setTimeout(showNextSlide, 9000); // Skift til næste billede efter 9 sekunder (ændr dette tal efter behov)
}

// Start billedkarrusellen
showNextSlide();

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
