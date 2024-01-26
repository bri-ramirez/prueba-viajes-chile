$(function () {
  // activamos el tooltip
  $('[data-bs-toggle="tooltip"]').tooltip();


  $("#btn-enviar-correo").click(function (e) {

    // evitamos que se envíe el formulario
    e.preventDefault();

    // capturamos el valor del input
    const name = $("#name").val();
    // validamos que el nombre no esté vacío
    if (name == "") {
      alert("Debe ingresar un nombre");
    }

    // capturamos el valor del input
    const subject = $("#subject").val();
    // validamos que el asunto no esté vacío
    if (subject == "") {
      alert("Debe ingresar un asunto");
    }

    // capturamos el valor del input
    const message = $("#message").val();
    // validamos que el mensaje no esté vacío
    if (message == "") {
      alert("Debe ingresar un mensaje");
    }

    // si todos los campos están completos
    if (name != "" && subject != "" && message != "") {
      // enviamos el correo
      alert("Correo enviado");
    }
  });
})

