/* --- DOM Element --- */
const navbar = document.getElementById("navbar");

/* --- EventListener --- */
navbar.addEventListener("click", handleClink);
document.addEventListener("scroll", () => {
  const navItems = document.querySelector(".nav-items");

  navItems.style.top = `${this.scrollY}px`;
});

/* --- Function --- */
function handleClink(e) {
  const target = e.target;

  if (target.classList.contains("drop-btn")) {
    target.classList.toggle("clicked");
    target.nextElementSibling.classList.toggle("dropped");

    if (target.classList.contains("clicked")) {
      target.querySelector("img").src = "./images/icon-arrow-up.svg";
    } else {
      target.querySelector("img").src = "./images/icon-arrow-down.svg";
    }
  } else if (target.classList.contains("menu-btn")) {
    target.parentElement.querySelector(".nav-items").classList.add("fadeIn");
    document.body.style.overflow = "hidden";
  } else if (target.classList.contains("close-btn")) {
    target
      .closest(".navbar")
      .querySelector(".nav-items")
      .classList.remove("fadeIn");
    document.body.style.overflow = "visible";
  }
}
