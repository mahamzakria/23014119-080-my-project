// 1. Toggle Sidebar for Mobile View
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
}

// 2. Close Sidebar Button
function closeMenu() {
    document.getElementById("sidebar").classList.add("hidden");
}

// 3. Highlight Current Section in Navbar
function highlightCurrentSection() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const top = window.scrollY;
            const offset = section.offsetTop - 100;
            const height = section.offsetHeight;
            if (top >= offset && top < offset + height) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("text-blue-500", "font-bold");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("text-blue-500", "font-bold");
            }
        });
    });
}

// 4. Search Box Functionality (Dummy search)
function enableSearch() {
    const searchInput = document.querySelector(".search-box");
    const searchButton = document.querySelector(".search-btn");

    searchButton.addEventListener("click", () => {
        alert("You searched for: " + searchInput.value);
    });
}

// 5. Scroll to Top Button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. Show/Hide password (For future login page)
function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// 7. Validate Contact Form (Basic)
function validateContactForm() {
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", function (e) {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();

        if (!name || !email || !phone) {
            e.preventDefault();
            alert("Please fill out all contact fields.");
        }
    });
}

// 8. Load Page Animation (optional effect)
function fadeInOnLoad() {
    window.addEventListener("load", () => {
        document.body.classList.add("transition-opacity", "duration-700", "opacity-100");
    });
}

// 9. Smooth Scroll for Nav Links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// 10. Dark Mode Toggle (if you want to add dark mode later)
function toggleDarkMode() {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
}

// ======= INITIALIZE FUNCTIONS ON LOAD ======= //
document.addEventListener("DOMContentLoaded", function () {
    highlightCurrentSection();
    enableSearch();
    validateContactForm();
    fadeInOnLoad();
    smoothScroll();
});