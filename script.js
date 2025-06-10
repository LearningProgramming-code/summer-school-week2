document.querySelectorAll(".card").forEach(function (example) {
    example.addEventListener("mouseover", () => {
        example.style.opacity = ".8"
    })
    example.addEventListener("mouseout", () => {
      example.style.opacity = "1";
    });
    example.addEventListener("click", () => {
      window.location.href = "event.html"
    });
});
