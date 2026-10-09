/* =========================================================
   AGRINOVA
   Landing Page JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAVBAR ================= */

    const navbar = document.getElementById("navbar");

    const handleNavbar = () => {

        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        updateActiveNavigation();

    };

    window.addEventListener("scroll", handleNavbar);

    handleNavbar();


    /* ================= MOBILE MENU ================= */

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");

            const icon = mobileMenuBtn.querySelector("i");

            if (mobileMenu.classList.contains("open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });


        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                const icon = mobileMenuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* ================= ACTIVE NAVIGATION ================= */

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id]");

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const target = link.getAttribute("href");

            if (target === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }


    /* ================= SMOOTH INTERNAL LINKS ================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId = anchor.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navbarHeight = navbar.offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* ================= IMPACT COUNTERS ================= */

    const counters = document.querySelectorAll("[data-target]");

    let countersStarted = false;

    const animateCounter = (element) => {

        const target = Number(element.dataset.target);

        const duration = 1500;

        const startTime = performance.now();

        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            const easedProgress =
                1 - Math.pow(1 - progress, 3);

            const currentValue =
                Math.floor(target * easedProgress);

            element.textContent =
                currentValue.toLocaleString("en-IN");

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }

        }

        requestAnimationFrame(updateCounter);

    };


    const impactSection = document.querySelector(".impact-section");

    if (impactSection) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting && !countersStarted) {

                        countersStarted = true;

                        counters.forEach(counter => {
                            animateCounter(counter);
                        });

                    }

                });

            },
            {
                threshold: 0.25
            }
        );

        observer.observe(impactSection);

    }


    /* ================= CARD HOVER MICRO INTERACTION ================= */

    const cards = document.querySelectorAll(
        ".problem-card, .pathway-card, .impact-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.willChange = "transform";
        });

        card.addEventListener("mouseleave", () => {
            card.style.willChange = "auto";
        });

    });


    /* ================= CURRENT YEAR ================= */

    const currentYear = new Date().getFullYear();

    const yearText = document.querySelector(".footer-bottom span");

    if (yearText) {

        yearText.textContent =
            yearText.textContent.replace(
                "2026",
                currentYear
            );

    }

});