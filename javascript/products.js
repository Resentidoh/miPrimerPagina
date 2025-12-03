const botonBarra = document.getElementById("botonBarra");
const barraNav = document.getElementById("barraNav");

// -----------------------
// Guardar si se clickeó la barra
// -----------------------
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        localStorage.setItem("abrirBarra", "true");
    });
});

// -----------------------
// Abrir barra si viene de la misma web
// -----------------------
document.addEventListener("DOMContentLoaded", () => {
    const barra = document.getElementById("barraNav");

    if (localStorage.getItem("abrirBarra") === "true") {
        barra.classList.add("open");
    }

    // limpiar memoria para no abrirla al recargar
    localStorage.removeItem("abrirBarra");
});

botonBarra.addEventListener("click", () => {
    barraNav.classList.toggle("open");
});