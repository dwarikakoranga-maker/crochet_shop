const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = `Hi! I’d love to order the ${product} 🧶💖`;
    
    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
});

