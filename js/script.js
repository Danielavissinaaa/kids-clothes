// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika produk menu di klik
document.querySelector("#produk-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const produk = document.querySelector("#produk-menu");

document.addEventListener("click", function (e) {
  if (!produk.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
