
// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ========================================
// 2. CLOSE MENU AFTER CLICKING A LINK
// ========================================

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ========================================
// 3. AUTOMATIC FOOTER YEAR
// ========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ========================================
// 4. ACTIVE NAVIGATION LINK
// ========================================

const sections = document.querySelectorAll("section");

const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// ========================================
// 5. CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value;

    // CHANGE THIS TO YOUR EMAIL ADDRESS
    const receiver = "yourmail@gmail.com";

    const emailBody =
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message;

    const mailtoLink =
        "mailto:" + receiver +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(emailBody);

    window.location.href = mailtoLink;

});
