const toggleBtn = document.querySelector(".header__toggle-btn");
const modal = document.querySelector(".modal");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle(".header__toggle-btn--inactive")

});