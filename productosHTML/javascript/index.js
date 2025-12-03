const botonBarra = document.getElementById("botonBarra");
const barraNav = document.getElementById("barraNav");

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        localStorage.setItem("abrirBarra", "true");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const barra = document.getElementById("barraNav");

    if (localStorage.getItem("abrirBarra") === "true") {
        barra.classList.add("open");
    }

    localStorage.removeItem("abrirBarra");
});

function volver() {
    if (document.referrer) {
        window.location.href = document.referrer;
    } else {
        window.location.href = "products.html"; // fallback
    }
}

botonBarra.addEventListener("click", () => {
    barraNav.classList.toggle("open");
});