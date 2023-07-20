let productosEnCarrito = localStorage.getItem("productos-agregados-al-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#compra");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".delete");
const botonVaciarCarrto = document.querySelector("#vaciar-carrito");
const precioTotal = document.querySelector("#total");

function guardarEnLocalStorage() {
  localStorage.setItem("productos-agregados-al-carrito", JSON.stringify(productosEnCarrito));
}
function cargarProductosEnCarrito() {
  
  if (productosEnCarrito && productosEnCarrito.length > 0) {

    carritoVacio.classList.add("disabled");
    carritoProductos.classList.remove("disabled");
    carritoAcciones.classList.remove("disabled");
    carritoComprado.classList.add("disabled");

    carritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto-en-carrito");
      div.innerHTML = `
                <div class="carrito-producto-imagen">
                  <img src="${producto.imagen}" alt="${producto.titulo}">
                </div>
                
                <div class="detalle-producto">
                    <h3>${producto.titulo}</h3>
                    
                    
                  <div class="precio-opcional">
                  <div class="tallas-disponibles">
                    <label for="tallas-${producto.id}">Tallas disponibles:</label>
                    <select id="tallas-${producto.id}">
                    ${producto.tallas.map(talla => `<option value="${talla}">${talla}</option>`).join("")}
                    </select>
                  </div>
                  
                <div class="carrito-producto-cantidad">
                  <small>Cantidad</small>
                  <button class="boton-decrementar" data-id="${producto.id}">-</button>
                  <span class="cantidad-producto" data-cantidad="${producto.cantidad}">${producto.cantidad}</span>
                  <button class="boton-incrementar" data-id="${producto.id}">+</button>
                </div>

                
                        <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>$${producto.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>$${producto.precio * producto.cantidad}</p>
                    </div>
                        
                        <button class="delete" id="${
                          producto.id
                        }"><ion-icon name="trash-outline"></ion-icon></button>
                    </div>
                </div>
                `;

      carritoProductos.append(div);

    });
    actualizarBotonesEliminar();
    actualizarBotonesCantidad();
    actualizarTotal();

  } else {
    carritoVacio.classList.remove("disabled");
    carritoProductos.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.add("disabled");
  }
}

cargarProductosEnCarrito();

function actualizarBotonesCantidad() {
  const botonesIncrementar = document.querySelectorAll(".boton-incrementar");
  const botonesDecrementar = document.querySelectorAll(".boton-decrementar");

  botonesIncrementar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const idProducto = e.currentTarget.dataset.id;
      incrementarCantidad(idProducto);
    });
  });

  botonesDecrementar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const idProducto = e.currentTarget.dataset.id;
      decrementarCantidad(idProducto);
    });
  });
}


function incrementarCantidad(idProducto) {
  const productoAgregado = productosEnCarrito.find(producto => producto.id === idProducto);
  if (productoAgregado) {
    productoAgregado.cantidad++;
    guardarEnLocalStorage();
    actualizarTotal();
    const cantidadElement = document.querySelector(`[data-id="${idProducto}"] .cantidad-producto`);
    cantidadElement.innerText = productoAgregado.cantidad; // Actualizamos el contenido del elemento
    cantidadElement.dataset.cantidad = productoAgregado.cantidad;
    actualizarTotal();
  }
}

function decrementarCantidad(idProducto) {
  const productoAgregado = productosEnCarrito.find(producto => producto.id === idProducto);
  if (productoAgregado && productoAgregado.cantidad > 1) {
    productoAgregado.cantidad--;
    guardarEnLocalStorage();
    actualizarTotal();
    const cantidadElement = document.querySelector(`[data-id="${idProducto}"] .cantidad-producto`);
    cantidadElement.innerText = productoAgregado.cantidad; // Actualizamos el contenido del elemento
    cantidadElement.dataset.cantidad = productoAgregado.cantidad;
    actualizarTotal();
  }
}



function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".delete");

  botonesEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {

  Toastify({
    text: "Producto eliminado",
    duration: 3000,
    gravity: "top",
    position: "left", 
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, rgb(240, 237, 237), rgba(201, 195, 195, 0.863))",
      borderRadius: "10px",
      color: "black",
      padding: "8px"
    },
    onClick: function(){} 
  }).showToast();

  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex(
    producto => producto.id === idBoton
  );
  productosEnCarrito.splice(index, 1);

  cargarProductosEnCarrito();

  localStorage.setItem(
    "productos-agregados-al-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

botonVaciarCarrto.addEventListener("click", vaciarCarrito);

function vaciarCarrito () {
  productosEnCarrito.length = 0;
  localStorage.setItem(
    "productos-agregados-al-carrito",
    JSON.stringify(productosEnCarrito)
  );
  cargarProductosEnCarrito();
}

function actualizarTotal() {
  precioTotal.innerHTML = "$" + productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
}
