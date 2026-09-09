/* ========================================
   MOBILE MENU
======================================== */

const menuIcon = document.getElementById("menuIcon");
const navbar = document.querySelector(".navbar");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}


/* ========================================
   CLOSE MENU AFTER CLICKING LINK
======================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ========================================
   ACTIVE NAVIGATION
======================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ========================================
   CONTACT FORM
======================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all fields.");

            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}