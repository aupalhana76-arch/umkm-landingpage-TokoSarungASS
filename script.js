// ----- Carousel otomatis -----
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlides() {
  slides.forEach((img, i) => {
    img.style.opacity = i === slideIndex ? "1" : "0";
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 4000); // ganti slide tiap 4 detik
}

if (slides.length > 0) {
  showSlides();
}

// ----- Tombol ke atas -----
const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
