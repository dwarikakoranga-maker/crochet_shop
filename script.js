document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let index = 0;

  /* BUTTON NAVIGATION */
  const next = slider.querySelector(".next");
  const prev = slider.querySelector(".prev");

  function moveSlide(step) {
    index = (index + step + images.length) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => moveSlide(1));
  prev.addEventListener("click", () => moveSlide(-1));

  /* TOUCH SUPPORT */
  let startX = 0;

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      moveSlide(diff > 0 ? 1 : -1);
    }
  });
});

/* WHATSAPP BUTTON */
document.querySelectorAll("button[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = `Hi! I’d love to order the ${product} 🧶💖`;

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
});
