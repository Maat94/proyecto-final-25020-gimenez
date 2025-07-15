document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el formulario//

  const formulario = document.querySelector('form');

  /*------------- VALIDACIÓN FORMULARIO ---------------*/
  //Función Mostrar Error

  const mostrarError = (input, mensaje) => {
    // Accedemos al DIV contenedor
    const divPadre = input.parentNode;
    // Seleccionamos al elemento error-text
    const errorText = divPadre.querySelector('.error-text');
    // Agregamos la clase de error al elemento padre
    divPadre.classList.add('error');
    // Agregamos mensaje de error
    errorText.innerText = mensaje;
  };

  const input = document.querySelector('#message');
  const mensaje = 'Campo Obligatorio';

  // Eliminar mensaje de error //

  const eliminarError = (input) => {
    // Accedemos a la etiqueta contenedora
    const divPadre = input.parentNode;
    // Eliminamos la clase de error del elemento contenedor
    divPadre.classList.remove('error');
    // Seleccionamos al elemento error-text
    const errorText = divPadre.querySelector('.error-text');
    // Establecemos el texto como vacío
    errorText.innerText = '';
  };

  // Función para corroborar si los campos están completos para quitar el error

  formulario.querySelectorAll('input, textarea').forEach((input) => {
    // El evento se activa cuando el valor de un elemento del formulario cambia y se sale del elemento
    input.addEventListener('blur', () => {
      // Obtenemos el valor del campo seleccionado
      const valor = input.value.trim(); // Con trim eliminamos el espacio en blanco al principio y final del valor obtenido

      //Condición para evaluar
      if (valor !== '') {
        eliminarError(input);
      }
    });
  });

  //--------------------------------------------------------------

  // Función validar campo

  function validarCampo(campoId, mensaje) {
    const campo = document.getElementById(campoId);
    const value = campo.value.trim();

    if (value == '') {
      mostrarError(campo, mensaje);
      return false; // Indicamos que la validacion falló
    } else {
      eliminarError(campo);
      return true; // Indicamos que la validacion ha sido exitosa
    }
  }

  // Función para validar un correo electrónico utilizando una expresión regular
  function isEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email); // Devuelve true si la cadena coincide con el patrón de la expresión regular
  }

  // Función para validar el campo de email
  function validarEmail(campoId, mensaje) {
    // Obtenemos elemento mediante id
    const campo = document.getElementById(campoId);
    const email = campo.value.trim();
    // Si el campo esta vacio
    if (email === '') {
      // Establecemos mensaje de error
      mostrarError(campo, 'El correo electronico es obligatorio');
      // Indicamos que la validacion ha fallado
      return false;
    } else if (!isEmail(email)) {
      // Establecemos mensaje de error
      mostrarError(campo, mensaje);
      // Indicamos que la validacion ha fallado
      return false;
    } else {
      // Si es valido eliminamos cualquier error
      eliminarError(campo);
      // Indicamos que la validacion es exitosa
      return true;
    }
  }

  // --------------------------------------------------------------------------------
  // Función para validar el formulario
  const validarFormulario = () => {
    let validar = true;

    // Validar campo email
    validar =
      validarEmail('email', 'El correo electrónico no es válido') && validar;
    // Validar Textarea
    validar = validarCampo('message', 'El mensaje es obligatorio') && validar;

    return validar;
  };

  // -------------------------------------------------------------------------------------
  // Agregar un evento de escucha para cuando se envia el formulario
  formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validarFormulario()) {
      // Mensaje no válido
      event.preventDefault(); // Evita que el formulario se envie
      console.log('El formulario no es valido');
    } else {
      formulario.submit();
      console.log('El formulario es valido...');
    }
  });
});
