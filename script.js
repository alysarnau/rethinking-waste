const links = document.querySelectorAll(".nav-list li a");

for (let link of links) {
    link.addEventListener('click', smoothScroll)
}
const rootElement = document.documentElement;
let width = window.innerWidth


function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
    if (width < 1000) {
        hideMenu();
    }
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

const navList = document.querySelector(".nav-list")
navList.addEventListener("click", (e) => {
    const navLink = e.target.parentElement
    if (navLink.classList.contains("link")) {
        navList.querySelector(".active").classList.remove("active");
        navLink.classList.add("active")
    }
})

const scrollButton = document.querySelector(".top")


document.addEventListener("scroll", showButton)
scrollButton.addEventListener("click", scrollToTop)

function showButton() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if (rootElement.scrollTop / scrollTotal > 0.3) {
        scrollButton.classList.add('show-btn')
    } else {
        scrollButton.classList.remove('show-btn')
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// mobile responsive menu

const menu = document.querySelector(".nav-list")
const hamburger = document.querySelector(".hamburger")
const closeIcon = document.querySelector(".close")

const showMenu = () => {
    hamburger.style.display = "none";
    closeIcon.style.transform = "translateY(0rem)"
    menu.style.transform = "translateY(0)"
}

const hideMenu = () => {
    closeIcon.style.transform = "translateY(-40rem)";
    hamburger.style.display = "block";
    menu.style.transform = "translateY(-200%)"
}

hamburger.addEventListener("click", showMenu)
closeIcon.addEventListener("click", hideMenu)

