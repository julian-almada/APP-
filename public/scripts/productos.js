const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const botonTodos = document.querySelector("#todos");
const titulo = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.boton-agregar');
const numerito = document.querySelector('#numerito');

let productos = [];

fetch("scripts/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })



function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {
    
    const div = document.createElement("div");
    div.classList.add("producto-producto");
    div.innerHTML = `
        
          <div class="producto-imagen"><img src="${producto.imagen}" alt="${producto.titulo}"></div>
          <h2 class="nombre-producto">${producto.titulo}</h2>
          <h3 class="precio-producto">$ ${producto.precio}</h3>
        <div class="botones">
        <button class="boton-ver" data-id="${producto.id}">Ver</button>
        <button class="boton-agregar" id="${producto.id}">Agregar</button>
        </div>
        

        `;

        const botonVer = div.querySelector(".boton-ver");
        botonVer.addEventListener("click", mostrarDetalleProducto);

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

function mostrarDetalleProducto(event) {
  const productoId = event.target.dataset.id;
  const producto = productos.find(p => p.id === productoId);

  if (producto) {
    const urlDetalleProducto = `detalle_producto?id=${productoId}`;
    window.location.href = urlDetalleProducto;
  } else {
    alert("El producto no pudo ser encontrado.");
  }
}




cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton =>
      boton.classList.remove("categoria-elegida")
    );
    e.currentTarget.classList.add("categoria-elegida");

    if (e.currentTarget.id != "todos") {

      titulo.innerText = "Todos los productos";
      const tituloCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
      titulo.innerText = tituloCategoria.categoria.nombre;

      const categoriaElegida = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
  
      cargarProductos(categoriaElegida);
    } else {
      titulo.innerText = "Todos los productos";
      cargarProductos(productos);
    }


  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll('.boton-agregar');

  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
  });
}

let productosAgregados;

let productosEnCarritoLS = localStorage.getItem("productos-agregados-al-carrito");
if (productosEnCarritoLS) {
  productosAgregados = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosAgregados = [];
}

function agregarAlCarrito(e) {
  Toastify({
    text: "Producto agregado",
    duration: 3000,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #25d1b2, rgba(201, 195, 195, 0.863))",
      borderRadius: "10px",
      color: "black",
      padding: "8px"
    },
    onClick: function(){}
  }).showToast();

    const idBoton = e.currentTarget.id;

    const productoAgregado = productos.find(producto => producto.id === idBoton);
    

    if (productosAgregados.some(producto => producto.id === idBoton)) {
 
      const index = productosAgregados.findIndex(producto => producto.id === idBoton);
      productosAgregados[index].cantidad++;
    } else {
      productoAgregado.cantidad = 1;
    productosAgregados.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-agregados-al-carrito", JSON.stringify(productosAgregados));
    
}

function actualizarNumerito() {
  let nuevoNumerito = productosAgregados.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}






