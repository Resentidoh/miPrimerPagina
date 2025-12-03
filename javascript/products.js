const botonBarra = document.getElementById("botonBarra");
const barraNav = document.getElementById("barraNav");

barraNav.classList.toggle("open");

botonBarra.addEventListener("click", () => {
    barraNav.classList.toggle("open");
});