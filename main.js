const icons = document.querySelectorAll(".social-icon");

icons.forEach((icon) => {
  icon.addEventListener("click", function (event) {
    const target = this.getAttribute("data-target");
    const content = document.getElementById(target);

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

    if (target === "about-me-content" || target === "resume-content") {
      event.preventDefault();
    }
  });
});
