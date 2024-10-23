const hamMenu = document.querySelector(".ham");

const offScreenMenu = document.querySelector(".off-screen-menu")

const wraptoggle = document.querySelector(".wrap")

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
    wraptoggle.classList.toggle('active')
})