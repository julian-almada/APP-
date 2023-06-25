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
    id: "gorra-01",
    titulo: "Gorra",
    imagen: "img/gorra1.jpg",
    categoria: {
      nombre: "Gorras",
      id: "gorras",
    },
    precio: 7000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const botonTodos = document.querySelector("#todos");

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
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton =>
      boton.classList.remove("categoria-elegida")
    );
    e.target.classList.add("categoria-elegida");

    if (e.target.id != "todos") {
      const categoriaElegida = productos.filter(
        (producto) => producto.categoria.id === e.target.id
      );
  
      cargarProductos(categoriaElegida);
    } else {
      cargarProductos(productos);
    }


  });
});


