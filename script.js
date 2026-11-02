
// Highlight the navigation link for the section
// currently visible on the screen.

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navigationLinks.forEach((link) => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + entry.target.id
                    );

                });

            }

        });

    }, {
        rootMargin: "-25% 0px -65% 0px"
    });

    sections.forEach((section) => {

        observer.observe(section);

    });

}
