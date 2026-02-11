const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
});

