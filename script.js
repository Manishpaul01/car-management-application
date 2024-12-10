document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    const togglers = document.querySelectorAll("[data-toggle]");
    for (let i = 0; i < togglers.length; i++) {
        try {
            const toggler = togglers[i];
            if (toggler && toggler instanceof HTMLElement) {
                toggler.addEventListener("click", (e) => {
                    document.querySelector(toggler.getAttribute("data-target"))?.classList.toggle(toggler.getAttribute("data-toggle"))
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
});
