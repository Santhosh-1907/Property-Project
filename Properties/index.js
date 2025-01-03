const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
    window.addEventListener('scroll', function() {
    navList.classList.remove("open");
    })
  });
}


