const productos = [
  {
    id: "campera-01",
    titulo: "Campera fachera",
    imagen: "img/campera.jpg",
    categoria: {
      nombre: "Camperas",
      id: "camperas",
    },
    precio: 15000,
  },
  {
    id: "buzo-01",
    titulo: "Buzo facherito",
    imagen: "img/buzo1.jpg",
    categoria: {
      nombre: "Buzos",
      id: "buzos",
    },
    precio: 10000,
  },
  {
    id: "gorra-01",
    titulo: "Gorra",
    imagen: "img/gorra.jpg",
    categoria: {
      nombre: "Gorras",
      id: "gorras",
    },
    precio: 7000,
  },
  {
    id: "pantalon-01",
    titulo: "Pantalon buenaso",
    imagen: "img/pantalon.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 12000,
  },
  {
    id: "remera-01",
    titulo: "Remera facha",
    imagen: "img/remera1.jpg",
    categoria: {
      nombre: "Remeras",
      id: "remeras",
    },
    precio: 8000,
  },
  {
    id: "remera-02",
    titulo: "Remera facha",
    imagen: "img/remera.png",
    categoria: {
      nombre: "Remeras",
      id: "remeras",
    },
    precio: 8000,
  },
  {
    id: "sapatillas-01",
    titulo: "Jordan papá",
    imagen: "img/jordan2.jpg",
    categoria: {
      nombre: "Sapatillas",
      id: "zapatillas",
    },
    precio: 30000,
  },
  {
    id: "gorra-02",
    titulo: "Gorra",
    imagen: "img/gorra1.jpg",
    categoria: {
      nombre: "Gorras",
      id: "gorras",
    },
    precio: 7000,
  },
  {
    id: "sapatillas-02",
    titulo: "Jordan papá",
    imagen: "img/jordan.jpg",
    categoria: {
      nombre: "Sapatillas",
      id: "zapatillas",
    },
    precio: 30000,
  },
  {
    id: "buzo-02",
    titulo: "Buzo facherito",
    imagen: "img/buzo.jpg",
    categoria: {
      nombre: "Buzos",
      id: "buzos",
    },
    precio: 10000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const botonTodos = document.querySelector("#todos");
const titulo = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.boton-agregar');
const numerito = document.querySelector('#numerito');

function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {
    
    const div = document.createElement("div");
    div.classList.add("producto-producto");
    div.innerHTML = `
        
        <div class="producto-imagen"><img src="${producto.imagen}" alt="${producto.titulo}"></div>
        <h2 class="nombre-producto">${producto.titulo}</h2>
        <h3 class="precio-producto">$ ${producto.precio}</h3>
        <button class="boton-agregar" id="${producto.id}">Agregar</button>`;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
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
