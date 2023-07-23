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

  const botonAgregar = document.querySelector(".boton-agregar");
  botonAgregar.addEventListener("click", accion);

  const garantiaButtons = document.querySelectorAll('.garantia-button');
  garantiaButtons.forEach(button => {
    const garantiaId = button.dataset.garantia;
    const garantiaAlert = document.getElementById(garantiaId);

    button.addEventListener('click', function(){
      garantiaAlert.style.display = "block";
    });
  });

  const cerrarAlertaBtns = document.querySelectorAll(".cerrar-alerta");
  cerrarAlertaBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const alerta = this.parentNode; // Obtener el div padre (la alerta)
      alerta.style.display = "none"; // Ocultar la alerta al hacer clic en el botón de cerrar
    });
  });
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
