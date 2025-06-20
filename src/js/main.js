document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".burger-btn");
  const nav = document.getElementById("main-navigation");

  btn.addEventListener("click", function () {
    // Toggle der Klasse
    const isOpen = nav.classList.toggle("open");

    // aria-expanded anpassen
    btn.setAttribute("aria-expanded", isOpen);
  });
});
