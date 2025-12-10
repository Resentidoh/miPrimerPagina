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
        window.location.href = "products.html"; 
    }
}

botonBarra.addEventListener("click", () => {
    barraNav.classList.toggle("open");
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio, img) {
    carrito.push({ nombre, precio, img});
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

if (window.location.pathname.includes("carrito.html")) {
    mostrarCarrito();
}

function mostrarCarrito() {
    const cont = document.getElementById("carrito-container");

    if (carrito.length === 0) {
        cont.innerHTML = "<h4>El carrito está vacío</h4>";
        return;
    }

    cont.innerHTML = "";

    carrito.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("item-carrito");

        div.innerHTML = `
            <img src="${item.img}" width="60">
            <h3>${item.nombre}</h3>
            <p>$${item.precio}</p>
            <button class="btn-eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        cont.appendChild(div);
    });
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
}
