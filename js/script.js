
// Script básico para interactividad
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente.");
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
