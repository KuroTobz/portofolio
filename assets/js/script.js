// ===============================
// NAVBAR SCROLL
// ===============================

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ===============================
// MOBILE MENU
// ===============================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


// ===============================
// DARK MODE
// ===============================

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme) {

    document.documentElement
        .setAttribute(
            "data-theme",
            savedTheme
        );

}


themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement
            .getAttribute("data-theme");


    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";


    document.documentElement
        .setAttribute(
            "data-theme",
            newTheme
        );


    localStorage.setItem(
        "theme",
        newTheme
    );

});


// ===============================
// SCROLL ANIMATION
// ===============================

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                    observer
                        .unobserve(
                            entry.target
                        );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


// ===============================
// FOOTER YEAR
// ===============================

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();