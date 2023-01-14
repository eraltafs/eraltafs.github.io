const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


GitHubCalendar(".react-activity-calendar", "eraltafs")

// document.getElementById("resume-button-2").onclick = ()=>{
//     location.href ="\\static\\pdf\\Altaf_Khan_Resume.pdf" 
// }
// document.getElementById("resume-link-1").onclick = ()=>{
//     location.href ="\\static\\pdf\\Altaf_Khan_Resume.pdf" 
// }