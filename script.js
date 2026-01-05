document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let index = 0;

  slider.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });

  slider.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });
});

/* WhatsApp */
document.querySelectorAll("button[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = `Hi! I’d love to order the ${product} 🧶💖`;

    window.open(
      `https://wa.me/918266060636?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
});
