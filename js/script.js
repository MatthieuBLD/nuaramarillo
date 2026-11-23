
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".link, .video-card"
    );

    // Animation progressive
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });

    elements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });

});
