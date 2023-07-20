
const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('id');


fetch("scripts/productos.json")
  .then(response => response.json())
  .then(data => {
    const producto = data.find(p => p.id === productoId);
    if (producto) {
        document.querySelector('.imagenes-producto').innerHTML = `
        <img id="imagen-principal" src="${producto.imagen}" alt="imagen del producto">
        <div class="product-img-s">
            <img src="${producto.imagen1}" alt="img1">
            <img src="${producto.imagen2}" alt="img2">
            <img src="${producto.imagen3}" alt="img3">
        </div>
        `;
      document.getElementById('nombre-producto').innerText = producto.titulo;
      document.getElementById('precio-producto').innerText = `$${producto.precio}`;
      document.getElementById('descripcion-producto').innerText = producto.descripcion;
      
    } else {
      alert("El producto no pudo ser encontrado.");
    }
  })
 