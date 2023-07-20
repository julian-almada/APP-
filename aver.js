// Función para mostrar el detalle del producto en la página
function mostrarDetalleProducto(id) {
    const product = productos.find(item => item.id === id);

    if (product) {
        const productDetailDiv = document.getElementById("productDetail");
        productDetailDiv.innerHTML = `
            <h2>${product.nombre}</h2>
            <p><strong>Precio:</strong> $${product.precio.toFixed(2)}</p>
            <p>${product.descripcion}</p>
            <img src="${product.imagen}" alt="${product.nombre}">
        `;
    } else {
        console.error("Producto no encontrado");
    }
}

// Agregar eventos de clic a los enlaces de productos para mostrar el detalle del producto correspondiente
const productLinks = document.querySelectorAll(".productLink");
productLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const productId = parseInt(link.dataset.id, 10);
        mostrarDetalleProducto(productId);
    });
});