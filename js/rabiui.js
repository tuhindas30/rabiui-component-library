// Nav Toggle Button

const navToggle = document.getElementById("nav-toggle");

const navPillsMobile = document.getElementById("nav-pills-mobile");

navToggle.addEventListener("click", () => {
  if (navPillsMobile.style.display === "block") {
    navPillsMobile.style.display = "none";
  } else {
    navPillsMobile.style.display = "block";
  }
});

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

// Validation check

const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const uname = document.getElementById("uname");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

const checkInputs = () => {
  const firstNameValue = fname.value.trim();
  const lastNameValue = lname.value.trim();
  const userNameValue = uname.value.trim();
  const cityValue = city.value.trim();
  const stateValue = state.value.trim();
  const zipCodeValue = zipcode.value.trim();

  if (firstNameValue === "") {
    fname.parentElement.className = "fname error";
  } else {
    fname.parentElement.className = "fname success";
  }

  if (lastNameValue === "") {
    lname.parentElement.className = "lname error";
  } else {
    lname.parentElement.className = "lname success";
  }

  if (userNameValue === "") {
    uname.parentElement.className = "uname error";
  } else {
    uname.parentElement.className = "uname success";
  }

  if (cityValue === "") {
    city.parentElement.className = "city error";
  } else {
    city.parentElement.className = "city success";
  }

  if (stateValue === "") {
    state.parentElement.className = "state error";
  } else {
    state.parentElement.className = "state success";
  }

  if (zipCodeValue === "") {
    zipcode.parentElement.className = "zipcode error";
  } else {
    zipcode.parentElement.className = "zipcode success";
  }
};

// Modal

const modalContainer = document.getElementById("modal-container");

const showModalBtn = document.getElementById("btn-show-modal");

const modalOverlay = document.getElementById("overlay");

const modalClose = document.getElementById("modal-close");

const modalHide = document.getElementById("modal-hide");

showModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";
});

modalClose.addEventListener("click", () => {
  modalContainer.style.display = "none";
  modalOverlay.style.display = "none";
});

modalHide.addEventListener("click", () => {
  modalContainer.style.display = "none";
  modalOverlay.style.display = "none";
});

// Toast

const toast = document.getElementById("toast-contents");

const showToastBtn = document.getElementById("btn-show-toast");

showToastBtn.addEventListener("click", () => {
  toast.style.display = "block";
  if (toast.style.display === "block")
    setTimeout(() => {
      toast.style.display = "none";
    }, 5000);
});
