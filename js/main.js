document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navbar = document.getElementById("navbar");

  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    navbar.classList.toggle("open");
  });

  // Only toggle dropdown on mobile
  dropdownToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownMenu.classList.toggle("show-dropdown");
    }
  });
});

// NavbarScroll //
window.addEventListener('scroll', function () {
  const navbar = this.document.querySelector('.navbar');

  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});


const playBtn = document.getElementById("playBtn");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeBtn");
const videoFrame = document.getElementById("videoFrame");

playBtn.addEventListener("click", () => {
  videoModal.style.display = "flex";
  videoFrame.src = "https://www.youtube.com/embed/D3v3uwtR7mI?autoplay=1";
});

closeBtn.addEventListener("click", () => {
  videoModal.style.display = "none";
  videoFrame.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    videoFrame.src = "";
  }
});


const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2, // Show 2 slides on tablet
    },
    1024: {
      slidesPerView: 3, // Show 3 slides on desktop
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

