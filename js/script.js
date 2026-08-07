

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");

        menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        });

    const texts = [
    "Frontend Developer",
    "Python Learner",
    "Flask Developer",
    "Problem Solver"
    ];

    let index = 0;

    const typing = document.getElementById("typing-text");

        setInterval(() => {

        typing.textContent = texts[index];

    index++;

            if (index >= texts.length) {

        index = 0;

            }

        }, 2000);

    const skillCards = document.querySelectorAll(".skill-card");

        skillCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px)";

        });

            card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

            });

        });
    const projectCards = document.querySelectorAll(".project-card");

        projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px) scale(1.02)";

        });

            card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

            });

        });

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

    return;
            }

    alert("Message sent successfully!");

    form.reset();

        });

    const hiddenElements = document.querySelectorAll(".hidden");

        const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("in-view");

            }

        });

        }, {
        threshold: 0.1
        });

        hiddenElements.forEach(element => {

        observer.observe(element);

        });

    const themeButton = document.getElementById("theme-toggle");

        themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");
    themeButton.textContent = "☀️";

            } else {

        localStorage.setItem("theme", "dark");
    themeButton.textContent = "🌙";

            }

        });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.remove("light");
    themeButton.textContent = "🌙";

        } else {

        document.body.classList.add("light");
    themeButton.textContent = "☀️";

        }

    const topBtn = document.getElementById("topBtn");

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

        topBtn.style.display = "block";

            } else {

        topBtn.style.display = "none";

            }

        });

        topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

        });
