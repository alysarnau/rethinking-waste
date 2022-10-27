const links = document.querySelectorAll(".nav-list li a");

for (let link of links) {
    link.addEventListener('click', smoothScroll)
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
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
const rootElement = document.documentElement;

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