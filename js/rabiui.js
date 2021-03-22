// Nav Toggle Button

const navToggle = document.getElementById("nav-toggle");

const navPills = document.getElementById("nav-pills");

navToggle.addEventListener("click", () => {
  if (navPills.style.display === "block") {
    navPills.style.display = "none";
  } else {
    navPills.style.display = "block";
  }
});

// Prevent search reload

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (e) => e.preventDefault());

// Alert Close Button

const closeBtn = document.getElementById("close");

const alert = document.getElementById("alert");

closeBtn.addEventListener("click", () => {
  alert.style.display = "none";
});

// Scroll to top button

const floatBtn = document.getElementById("float-btn");

const scrollableHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

const GOLDEN_RATIO = 0.5;

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    floatBtn.style.display = "block";
  } else {
    floatBtn.style.display = "none";
  }
});

floatBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Card dismiss button

const dismissBtn = document.getElementById("dismiss-btn");

const card = document.getElementById("card");

dismissBtn.addEventListener("click", () => {
  card.style.display = "none";
});
