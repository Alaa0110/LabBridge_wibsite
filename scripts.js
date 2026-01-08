// Adding animation effects for elements when they become visible
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.hidden-anim');

    function onScroll() {
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // To trigger it on initial page load
});
