
const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get("id");

fetch("scripts/productos.json")
  .then((response) => response.json())
  .then((data) => {
    const producto = data.find((p) => p.id === productoId);
    if (producto) {
      document.querySelector(".detalle-producto").innerHTML = `

        <div class="carousel-container">
          <div class="carousel-main">
            <img src="" alt="Imagen 1" class="main-image">
          </div>
          <div class="carousel-thumbnails">
            <img src="${producto.imagen}" alt="Imagen 1" class="thumbnail active">
            <img src="${producto.imagen}" alt="Imagen 2" class="thumbnail">
            <img src="${producto.imagen}" alt="Imagen 3" class="thumbnail">
          </div>
        </div>

        <div class="descripcion-y-detalle">
          <h3 class="nombre-producto">${producto.titulo}</h3>
          <h2 class="precio-producto">$${producto.precio}</h2>
          <h6 class="descripcion-cuotas">Mismo precio en ${producto.cuotas} cuotas de $${producto.precioCuotas}</h6>
          <h6 class="descripcion-envio ${producto.envioGratis ? 'envio-gratis' : ''}"><span class="material-symbols-outlined"> local_shipping </span> 
            ${producto.envioGratis ? "Envío gratis a todo el país" : `Envio a todo el pais por $${producto.envioPrecio}`}
          </h6>

          <div class="tallas-disponibles">
            <label for="tallas-${producto.id}">Tallas disponibles:</label>
            <select id="tallas-${producto.id}">
              ${producto.tallas.map((talla) => 
                 `<option value="${talla}">${talla}</option>`).join("")
              }
            </select>
          </div>

          <div class="colores-disponibles">
            <label for="colores-${producto.id}">Colores disponibles:</label>
            <select id="colores-${producto.id}">
              ${producto.colores.map((color) => 
                 `<option value="${color}">${color}</option>`).join("")
              }
            </select>
          </div>

          <button class="boton-agregar" data-id="${producto.id}" data-talla="" data-color="">Añadir al carrito</button>
          <button class="product-btn">Comprar ahora</button>

          <p>
          ${producto.descripcion}
          </p>
        </div>

        
        `;
      

    }

    const botonAgregar = document.querySelector(".boton-agregar");
        console.log(botonAgregar);
        botonAgregar.addEventListener("click", accion);

        

  });

  function accion() {

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
      onClick: function () {}
    }).showToast();



}

  document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.querySelector(".main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");
  
    mainImage.src = thumbnails[0].src;
    thumbnails[0].classList.add("active");
  
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        const imageUrl = this.src;
        mainImage.src = imageUrl;

        thumbnails.forEach((thumb) => thumb.classList.remove("active"));
        this.classList.add("active");
      });
    });

    
  });

  
  const botonAlerta1 = document.getElementById('btnAlerta1');
  const botonAlerta2 = document.getElementById('btnAlerta2');
  const botonAlerta3 = document.getElementById('btnAlerta3');
  const alerta1 = document.getElementById('alerta1');
  const alerta2 = document.getElementById('alerta2');
  const alerta3 = document.getElementById('alerta3');

 
  botonAlerta1.addEventListener('click', function(){
    alerta1.style.display = "block";
  });
  botonAlerta2.addEventListener('click', function(){
    alerta2.style.display = "block";
  });
  botonAlerta3.addEventListener('click', function(){
    alerta3.style.display = "block";
  }); 
  
  document.addEventListener("DOMContentLoaded", function () {
    const cerrarAlertaBtns = document.querySelectorAll(".cerrar-alerta");
  
    cerrarAlertaBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const alerta = this.parentNode; // Obtener el div padre (la alerta)
        alerta.style.display = "none"; // Ocultar la alerta al hacer clic en el botón de cerrar
      });
    });
  });

