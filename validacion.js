      
      document.addEventListener("DOMContentLoaded", function () {
        document
          .getElementById("form")
          .addEventListener("submit", validarFormulario);
      });
  
      function validarFormulario(event) {
        event.preventDefault();
        var name = document.getElementById("Nombre").value;
        var surname = document.getElementById("Apellido").value;
        var exp = document.getElementById("txForm").value;
  
        if (name.length === 0 || surname.length === 0 || exp.length === 0) {
          alert("Por favor, no dejes campos vacios");
          return;
        }
  
        alert("El formulario fue enviado con exito! ");
        document.getElementById("Nombre").value = "";
        document.getElementById("Apellido").value = "";
        document.getElementById("txForm").value = "";
      }
