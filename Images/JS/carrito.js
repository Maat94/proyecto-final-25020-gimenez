document.addEventListener('DOMContentLoaded', () => {
  // Selección de elementos
  const contenedorElementosCarrito =
    document.getElementById('elementosCarrito');
  const elementoTotalCarrito = document.getElementById('totalCarrito');
  const botonVaciarCarrito = document.getElementById('btnVaciarCarrito');

  function renderizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
    contenedorElementosCarrito.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
      contenedorElementosCarrito.innerHTML = '<p>El carrito está vacío.</p>';
      elementoTotalCarrito.textContent = 'Total: $0.00';
      return;
    }

    // Usando Template Strings para construir el HTML de los Items //
    const itemsHtml = carrito.map((item) => {
      total += item.precio * item.cantidad; // Acumulando el total //
      return `
  <div class='item-carrito'>
    <div class="item-imagen">
      <img src="${item.imagen}" alt="${item.modelo}"/>
    </div>
    <div class="item-detalle">
      <span class="modelo">${item.modelo} (x${item.cantidad})</span>
      <span class="precio-unitario">$${(
        item.precio * item.cantidad
      ).toLocaleString('es-AR')}</span>
    </div>
    <div class="item-btn-eliminar">
      <button class='btn-eliminar-item' id='btn-eliminar-${
        item.id
      }'>Eliminar</button>
    </div>
  </div>
`;
    });

    //Uniendo todos los strings HTML e insertándolos en el contenedor //
    contenedorElementosCarrito.innerHTML = itemsHtml.join('');
    elementoTotalCarrito.textContent = `Total: $${total.toLocaleString(
      'es-AR'
    )}`;

    //Iterando sobre array 'carrito' para adjuntar eventos usando el ID generado para encontra cada botón.
    carrito.forEach((item) => {
      const botonEliminar = document.getElementById(`btn-eliminar-${item.id}`);
      if (botonEliminar) {
        // Asegurándonos que el botón exista
        botonEliminar.addEventListener('click', () => {
          // Al hacer click tenemos acceso al ID del item original
          eliminarProductoDelCarrito(item.id);
        });
      }
    });
    function eliminarProductoDelCarrito(idProducto) {
      let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

      const carritoActualizado = carrito
        .map((item) => {
          if (item.id === idProducto) {
            // Creamos un nuevo objeto con las propiedades exactas que necesitamos.
            // Copiamos id, nombre, precio y reducimos la cantidad.
            return {
              id: item.id,
              imagen: item.imagen,
              modelo: item.modelo,
              precio: item.precio,
              cantidad: item.cantidad - 1, // Aquí se decrementa la cantidad
            };
          }
          return item; // Si no es el producto a modificar, lo devolvemos tal cual
        })
        .filter((item) => item.cantidad > 0); //Mantiene solo aquellos ítems cuya cantidad sea mayor que cero

      localStorage.setItem(
        'carritoDeCompras',
        JSON.stringify(carritoActualizado)
      );
      renderizarCarrito();
    }
  }

  renderizarCarrito();

  botonVaciarCarrito.addEventListener('click', () => {
    localStorage.removeItem('carritoDeCompras');
    renderizarCarrito();
    alert('El carrito ha sido vaciado.');
  });
});
