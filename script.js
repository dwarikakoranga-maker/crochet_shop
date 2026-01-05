document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let index = 0;

  const next = slider.querySelector(".next");
  const prev = slider.querySelector(".prev");

  function moveSlide(step) {
    index = (index + step + images.length) % images.length;
    // Use percentages for consistent movement on all screen sizes
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents click from triggering touch events
    moveSlide(1);
  });

  prev.addEventListener("click", (e) => {
    e.stopPropagation();
    moveSlide(-1);
  });

  /* TOUCH SUPPORT */
  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener("touchend", e => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    // Only move if the swipe distance is more than 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        moveSlide(1);  // Swipe Left -> Next
      } else {
        moveSlide(-1); // Swipe Right -> Prev
      }
    }
  });
});
