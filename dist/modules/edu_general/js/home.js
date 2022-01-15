// SLIDER for HEADER
const imgs = document.querySelectorAll(".slider__img");
let currentIndex = 0;

function slide(derection) {
  currentIndex += derection;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  } else if (currentIndex >= imgs.length) {
    currentIndex = 0;
  }
  updateSlid(currentIndex);
}

function updateSlid(n) {
  for (let img of imgs) {
    img.classList.remove("active");
  }
  imgs[n].classList.add("active");
}

// FILTER for COURSES
const loadMore = document.getElementById("loadMore");
const btns = document.querySelectorAll(".courses__link");
const cards = document.querySelectorAll(".subject");

loadMore.onclick = function() {
  loadMore.style.display = "none";
  for (let card of cards) {
    if (card.style.display != "block") {
      card.style.display = "block";
    }
  }
};

for (let btn of btns) {
  btn.onclick = function() {
    filterCard(this.dataset.filter);
  };
}

function filterCard(sel) {
  for (let card of cards) {
    card.style.display = "none";
    if (card.classList.contains(sel)) {
      setTimeout(() => {
        card.style.display = "block";
      }, 1);
    }
  }
  for (let btn of btns) {
    if (btn.dataset.filter === sel) {
      btn.classList.add("active-link");
    } else {
      btn.classList.remove("active-link");
    }
  }
  setTimeout(() => {
    if (sel === "all") {
      cards.forEach((card, index) => {
        if (index > 5) {
          card.style.display = "none";
        }
      });
      loadMore.style.display = "block";
    }
  }, 1);
}

// SLIDER for Testimonials
const testimImgs = document.querySelectorAll(".testimonial-card");
let testimIndex = 0;

function testimSlide(derectionT) {
  testimIndex += derectionT;
  if (testimIndex < 0) {
    testimIndex = testimImgs.length - 1;
  } else if (testimIndex >= testimImgs.length) {
    testimIndex = 0;
  }
  updateT(testimIndex);
}

function updateT(n) {
  for (let img of testimImgs) {
    img.classList.remove("active");
  }
  testimImgs[n].classList.add("active");
}

// FILTER for TEACHERS
const seeAll = document.getElementById("seeAll");
const hideAll = document.getElementById("hideAll");
const experts = document.querySelectorAll(".expert");

seeAll.onclick = function() {
  seeAll.style.display = "none";
  hideAll.style.display = "block";
  for (let expert of experts) {
    if (expert.style.display != "block") {
      expert.style.display = "block";
    }
  }
};

hideAll.onclick = function() {
  experts.forEach((expert, index) => {
    if (index > 2) {
      expert.style.display = "none";
    }
  });
  hideAll.style.display = "none";
  seeAll.style.display = "block";
};

// VIDEO player
const btnPlay = document.getElementById("openVideo");
const modal = document.getElementById("modalBoxGallery");
const closeBtn = document.querySelector(".gallery__close-modalBox");
const videoPlay = document.querySelector(".gallery__clip");

btnPlay.onclick = () => {
  modal.classList.add("active");
  modal.addEventListener("click", hideModal);
  closeBtn.addEventListener("click", closeMoodal);

  function closeMoodal() {
    modal.classList.remove("active");
    modal.removeEventListener("click", hideModal);
    closeBtn.removeEventListener("click", closeMoodal);
    videoPlay.pause();
  }

  function hideModal(event) {
    if (event.target === modal) {
      closeMoodal();
    }
  }
};

// Config for FancyBox
const configFancy = {
  loop: true,
  infobar: false,
  toolbar: false
};
$('[data-fancybox="galleryFancy"]').fancybox(configFancy);

// TIMER
let deadline = "2020-05-01";

const timer = (id, deadline) => {
  const addZero = num => {
    if (num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  };
  const getTimeRemaining = endtime => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };
  const setClock = (selector, endTime) => {
    const timerDOM = document.querySelector(selector);
    const days = timerDOM.querySelector("#days");
    const hours = timerDOM.querySelector("#hours");
    const minutes = timerDOM.querySelector("#minutes");
    const seconds = timerDOM.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const tt = getTimeRemaining(endTime);
      days.textContent = addZero(tt.days);
      hours.textContent = addZero(tt.hours);
      minutes.textContent = addZero(tt.minutes);
      seconds.textContent = addZero(tt.seconds);
      if (tt.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
      }
    }
  };
  setClock(id, deadline);
};

timer(".timer", deadline);
