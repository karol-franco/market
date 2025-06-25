console.log('ingresando al js');

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnAgregarp');
    if (btn) {
        btn.addEventListener('click', () => {
            console.log('Botón clickeado');
            crearProducto();
        });
    }
});

function crearProducto() {
    const nombre = document.getElementById('nombre').value.trim();
    const tipo = document.getElementById('tipo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const precio = document.getElementById('precio').value.trim();
    const imgInput = document.getElementById('imgp');
    const imgFile = imgInput.files[0];
    const contenedor = document.getElementById('seccionProductos');

    // Validar campos
    if (!nombre || !tipo || !descripcion || !precio || !imgFile) {
        alert('Por favor, llene todos los campos requeridos.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const urlImagen = e.target.result;

        const productoHTML = `
            <div class="producto">
                <img src="${urlImagen}" alt="Imagen del producto" style="width:100px">
                <h3>${nombre}</h3>
                <p><strong>Tipo:</strong> ${tipo}</p>
                <p>${descripcion}</p>
                <p><strong>Precio:</strong> $${precio}</p>
            </div>
        `;

        contenedor.insertAdjacentHTML('beforeend', productoHTML);
        window.location.href('productos.html')

        // Guardar en localStorage
        localStorage.setItem('nombre producto', nombre);
        localStorage.setItem('Valor', precio);
        localStorage.setItem('Categoria', tipo);
        localStorage.setItem('Imagen', urlImagen);
          if (productoHTML) {
            contenedor.innerHTML = productoHTML;
        }

        // Limpiar formulario
        document.getElementById('nombre').value = '';
        document.getElementById('tipo').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('precio').value = '';
        imgInput.value = '';
    };

    reader.readAsDataURL(imgFile);
}
