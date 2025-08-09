// URL del API que proporciona los datos de los productos
const apiUrl = 'https://backcvbgtmdesa.azurewebsites.net/api/productos';

// Contenedor donde se mostrarán los productos
const productosContainer = document.getElementById('productos-container');

// Función para obtener los productos del API
async function obtenerProductos() {
    try {
        productosContainer.innerHTML = '<p class="text-center text-muted">Cargando productos...</p>';

        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const productos = await response.json();

        productosContainer.innerHTML = '';

        productos.forEach(producto => {
            // Lógica para mostrar el precio condicionalmente
            let precioHtml = `<h5 class="card-title">$${producto.Precio}</h5>`;
            if (producto.EnOferta) {
                precioHtml = `
                    <h5 class="card-title text-danger">$${producto.PrecioOferta}</h5>
                    <p class="card-text text-muted text-decoration-line-through">$${producto.Precio}</p>
                `;
            }
            
            const cardHtml = `
                <div class="col-12 col-md-4">
                    <div class="card h-100">
                        <img src="${producto.Imagen}" class="card-img-top card-img-zoom" alt="${producto.Nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.Nombre}</h5>
                            <p class="card-text">${producto.Descripcion}</p>
                            ${precioHtml} <a href="#" class="btn btn-primary w-100 agregar-carrito-btn">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
            `;
            productosContainer.innerHTML += cardHtml;
        });
        
        // Código para el contador del carrito (revertido al estado estático, solo por este ejemplo)
        const botonesAgregar = document.querySelectorAll('.agregar-carrito-btn');
        const contadorElemento = document.getElementById('cart-counter');

        botonesAgregar.forEach(boton => {
            boton.addEventListener('click', (event) => {
                event.preventDefault();
                let cantidadActual = parseInt(contadorElemento.textContent, 10);
                cantidadActual++;
                contadorElemento.textContent = cantidadActual;
            });
        });

    } catch (error) {
        console.error('Error al obtener los productos:', error);
        productosContainer.innerHTML = '<p class="text-center text-danger">Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.</p>';
    }
}

document.addEventListener('DOMContentLoaded', obtenerProductos);