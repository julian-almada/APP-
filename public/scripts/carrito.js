let productosEnCarrito = localStorage.getItem("productos-agregados-al-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#compra");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".delete");
const botonVaciarCarrto = document.querySelector("#vaciar-carrito");
const precioTotal = document.querySelector("#total");


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
                <div class="carrito-producto-imagen"><img src="${
                  producto.imagen
                }" alt="${producto.titulo}"></div>
                <div class="detalle-producto">
                    <h3>${producto.titulo}</h3>
                    <div class="precio-opcional">
                    <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
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
    actualizarTotal();

  } else {
    carritoVacio.classList.remove("disabled");
    carritoProductos.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.add("disabled");
  }
}

cargarProductosEnCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".delete");

  botonesEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
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
