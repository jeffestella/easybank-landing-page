const toggleBtn = document.querySelector(".header__toggle-btn");
const modal = document.querySelector(".modal");

toggleBtn.addEventListener("click", () => {
    modal.classList.toggle("modal--inactive");
    toggleBtn.classList.toggle("header__toggle-btn--hamburger");
    toggleBtn.classList.toggle("header__toggle-btn--x");
    console.log("click!")

});