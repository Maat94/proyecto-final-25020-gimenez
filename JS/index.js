document.addEventListener('DOMContentLoaded', () => {
  /*------------- MENU DESPLEGABLE ---------------*/

  const menuIcon = document.querySelector('#menu-icon');
  const overlayMenu = document.querySelector('.overlay-menu');

  // Mostrar menú desplegable //

  menuIcon.addEventListener('click', () => {
    overlayMenu.classList.toggle('show');
  });

  const menuLinks = document.querySelectorAll('.overlay-menu a');

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      overlayMenu.classList.remove('show');
    });
  });

  // Cerrar menú desplegable //

  const closeOverlayMenu = document.querySelector('.close-overlay');

  closeOverlayMenu.addEventListener('click', () => {
    overlayMenu.classList.toggle('show');
  });

  /* -------- Array Celulares -------- */

  const devices = [
    {
      id: 1,
      marca: 'Apple',
      modelo: 'iPhone 16 Pro Max 512 GB',
      precio: 2380000,
      imagen: 'https://raw.githubusercontent.com/Maat94/proyecto-final-25020-gimenez/main/Images/Images/Iphone-cart/iphone-16-pro-max.png',
    },
    {
      id: 2,
      marca: 'Apple',
      modelo: 'iPhone 16 Pro 128 GB',
      precio: 2160000,
      imagen: 'https://raw.githubusercontent.com/Maat94/proyecto-final-25020-gimenez/main/Images/Iphone-cart/iphone-16-pro.png',
    },
    {
      id: 3,
      marca: 'Apple',
      modelo: 'iPhone 16 Plus 128 GB',
      precio: 1936000,
      imagen: 'https://raw.githubusercontent.com/Maat94/proyecto-final-25020-gimenez/main/Images/Images/Iphone-cart/iphone-16-plus.png',
    },
    {
      id: 4,
      marca: 'Apple',
      modelo: 'iPhone 15 Plus 512 GB - Negro',
      precio: 1564000,
      imagen: 'https://raw.githubusercontent.com/Maat94/proyecto-final-25020-gimenez/main/Images/Iphone-cart/iphone-15-plus.jpg',
    },
    {
      id: 5,
      marca: 'Apple',
      modelo: 'iPhone 15 Plus 128 GB - Rosa',
      precio: 1472000,
      imagen: 'https://raw.githubusercontent.com/Maat94/proyecto-final-25020-gimenez/main/Images/Images/Iphone-cart/iphone-15-plus-rosa.png',
    },
    {
      id: 6,
      marca: 'Apple',
      modelo: 'iPhone 15 256 GB - Verde',
      precio: 1440000,
      imagen: 'https://raw.githubusercontent.com/Maat94/proyecto-final-25020-gimenez/main/Images/Iphone-cart/iphone-15.png',
    },
    {
      id: 7,
      marca: 'Apple',
      modelo: 'iPhone 13 128 GB',
      precio: 810000,
      imagen: 'https://raw.githubusercontent.com/Maat94/proyecto-final-25020-gimenez/main/Images/Iphone-cart/iphone-13.png',
    },
    {
      id: 8,
      marca: 'Apple',
      modelo: 'iPhone 12 64 GB',
      precio: 637500,
      imagen: 'https://raw.githubusercontent.com/Maat94/proyecto-final-25020-gimenez/main/Images/Iphone-cart/iphone-12.png',
    },

    {
      id: 9,
      marca: 'Samsung',
      modelo: 'Samsung Galaxy Z Fold6 512GB',
      precio: 4395600,
      imagen: './Images/Samsung-cart/fold6.png',
    },
    {
      id: 10,
      marca: 'Samsung',
      modelo: 'Samsung Galaxy S25 Ultra 256GB',
      precio: 3240000,
      imagen: './Images/Samsung-cart/s25-ultra.png',
    },
    {
      id: 11,
      marca: 'Samsung',
      modelo: 'Samsung Galaxy Z Flip6 512GB',
      precio: 2610000,
      imagen: './Images/Samsung-cart/flip6.png',
    },
    {
      id: 12,
      marca: 'Samsung',
      modelo: 'Samsung Galaxy S25 Plus 512GB',
      precio: 2116000,
      imagen: './Images/Samsung-cart/s25-plus.png',
    },
    {
      id: 13,
      marca: 'Samsung',
      modelo: 'Samsung Galaxy S24 Plus 256GB',
      precio: 1848000,
      imagen: './Images/Samsung-cart/s24-plus.png',
    },
    {
      id: 14,
      marca: 'Samsung',
      modelo: 'Samsung Galaxy S24 FE 256GB',
      precio: 1288000,
      imagen: './Images/Samsung-cart/s24-fe.png',
    },
    {
      id: 15,
      marca: 'Samsung',
      modelo: 'Samsung A55 128GB',
      precio: 1058000,
      imagen: './Images/Samsung-cart/a55.png',
    },
    {
      id: 16,
      marca: 'Samsung',
      modelo: 'Samsung A35 256GB',
      precio: 892500,
      imagen: './Images/Samsung-cart/a35.png',
    },

    {
      id: 17,
      marca: 'Motorola',
      modelo: 'Motorola Razr 60 Ultra 1TB',
      precio: 1840000,
      imagen: './Images/Motorola/razr60-ultra.png',
    },
    {
      id: 18,
      marca: 'Motorola',
      modelo: 'Motorola Edge 50 Ultra 512GB',
      precio: 1440000,
      imagen: './Images/Motorola/edge50-ultra.png',
    },
    {
      id: 19,
      marca: 'Motorola',
      modelo: 'Motorola Razr 50 Ultra 512GB',
      precio: 1332000,
      imagen: './Images/Motorola/razr50-ultra.png',
    },
    {
      id: 20,
      marca: 'Motorola',
      modelo: 'Motorola Razr 60 512GB',
      precio: 1144000,
      imagen: './Images/Motorola/razr60.png',
    },
    {
      id: 21,
      marca: 'Motorola',
      modelo: 'Motorola Razr 40 Ultra 512GB',
      precio: 1487500,
      imagen: './Images/Motorola/razr40-ultra.png',
    },
    {
      id: 22,
      marca: 'Motorola',
      modelo: 'Motorola Razr 40 256GB',
      precio: 1288000,
      imagen: './Images/Motorola/razr-40.png',
    },
    {
      id: 23,
      marca: 'Motorola',
      modelo: 'Motorola Edge 50 Pro 512GB',
      precio: 1148000,
      imagen: './Images/Motorola/edge50-pro.png',
    },
    {
      id: 24,
      marca: 'Motorola',
      modelo: 'Motorola Edge 60 512GB',
      precio: 892500,
      imagen: './Images/Motorola/edge60.png',
    },

    {
      id: 25,
      marca: 'Xiaomi',
      modelo: 'Xiaomi 14T 512GB',
      precio: 1530000,
      imagen: './Images/Xiaomi/xiaomi14t.webp',
    },
    {
      id: 26,
      marca: 'Xiaomi',
      modelo: 'Xiaomi Redmi Note 14 Pro 256GB',
      precio: 552000,
      imagen: './Images/Xiaomi/redmi14-pro.webp',
    },
    {
      id: 27,
      marca: 'Xiaomi',
      modelo: 'Xiaomi Redmi Note 13 256GB',
      precio: 495000,
      imagen: '/Images/Xiaomi/redmi-13.webp',
    },
    {
      id: 28,
      marca: 'Xiaomi',
      modelo: 'Xiaomi Redmi14 256GB',
      precio: 432400,
      imagen: './Images/Xiaomi/redmi-14.webp',
    },
    {
      id: 29,
      marca: 'Xiaomi',
      modelo: 'Xiaomi Redmi Note 11 128GB',
      precio: 378000,
      imagen: './Images/Xiaomi/redmi-11.webp',
    },
    {
      id: 30,
      marca: 'Xiaomi',
      modelo: 'Xiaomi Redmi A3 64GB',
      precio: 225000,
      imagen: './Images/Xiaomi/redmi-a3.webp',
    },
    {
      id: 31,
      marca: 'Xiaomi',
      modelo: 'Xiaomi Redmi Pad Pro 12GB',
      precio: 633250,
      imagen: './Images/Xiaomi/redmi-pad-pro.webp',
    },
    {
      id: 32,
      marca: 'Xiaomi',
      modelo: 'Xiaomi Redmi Pad Se 11 128GB',
      precio: 892500,
      imagen: './Images/Xiaomi/redmi-pad-se.webp',
    },
  ];

  /*-****/ //////*-------------------------------------------*/

  agregarCarrito();

  function agregarCarrito() {
    // recorrer array original usando id de producto para encontrar btn correspondiente//
    devices.forEach((device) => {
      const boton = document.getElementById(`btn-agregar-${device.id}`);
      if (boton) {
        //asegurar que boton exista
        boton.addEventListener('click', () => {
          // al hacer click tenemos acceso al objeto 'devices' original
          agregarProductoAlCarrito(device);
        });
      }
    });
  }

  function agregarProductoAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    const indiceProductoExistente = carrito.findIndex(
      (item) => item.id === producto.id
    );

    if (indiceProductoExistente !== -1) {
      carrito[indiceProductoExistente].cantidad++;
    } else {
      carrito.push({
        id: producto.id,
        imagen: producto.imagen,
        modelo: producto.modelo,
        precio: producto.precio,
        cantidad: 1,
      });
    }

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    alert(`${producto.modelo} agregado al carrito!`);
  }
});
