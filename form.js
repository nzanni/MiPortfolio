emailjs.init("kpmnXBCTBsnfPuVxc");

const form = document.getElementById("formulario-contacto");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_oik1j7g", "template_mxizfyv", this)
    .then(() => {
      alert("Mensaje enviado con éxito.");
      form.reset();
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error al enviar. Intentalo más tarde.");
    });
});