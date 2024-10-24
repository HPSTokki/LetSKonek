// Variables go here for easy calling for later JS Functions

const hamMenu = document.querySelector(".ham");
const offScreenMenu = document.querySelector(".off-screen-menu")
const wraptoggle = document.querySelector(".wrap")
const faqsEvent = document.querySelector(".faqs")
const scholar = document.getElementById("Scholarship")
const jobOpp = document.getElementById("Job-Opp")


// Hamburger Menu Interactivity

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
    wraptoggle.classList.toggle('active')
})



// Link Events: Basically for redirecting to other webpage needed

faqsEvent.addEventListener("click", () => {
    window.location = "https://www.google.com"
})

scholar.addEventListener("click", ()=>{
    window.location = "haha.html"

})

jobOpp.addEventListener("click", ()=>{
    window.location = "haha.html"

})