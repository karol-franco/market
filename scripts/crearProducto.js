
console.log('ingresando al js')
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnAgregarp');
    if (btn) {
        btn.addEventListener('click', () => {
            console.log('Botón clickeado');
            crearProducto(); // Asegúrate que esta función esté en el mismo archivo
        });
    }
});
function crearProducto() {
    const nombreInput = document.getElementById('nombre');
    const tipoInput = document.getElementById('tipo');
    const descripcionInput = document.getElementById('descripcion');
    const valorInput = document.getElementById('precio');
    const imgProducto = document.getElementById('imgp');
    const contenedor = document.getElementById('seccionProductos');

    // Validar campos
    if (
        !nombreInput.value.trim() ||
        !tipoInput.value.trim() ||
        !descripcionInput.value.trim() ||
        !valorInput.value.trim() ||
        imgProducto.files.length === 0
    ) {
        alert('Por favor, llene todos los campos requeridos.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const urlImagen = e.target.result;

        const productoHTML = `
            <div class="producto">
                <img src="${urlImagen}" alt="Imagen del producto">
                <h3>${nombreInput.value}</h3>
                <p><strong>Tipo:</strong> ${tipoInput.value}</p>
                <p>${descripcionInput.value}</p>
                <p><strong>Precio:</strong> $${valorInput.value}</p>
            </div>
        `;

        contenedor.insertAdjacentHTML('beforeend', productoHTML);

        // Limpiar campos
        nombreInput.value = '';
        tipoInput.value = '';
        descripcionInput.value = '';
        valorInput.value = '';
        imgProducto.value = '';
    };

    reader.readAsDataURL(imgProducto.files[0]);
    window.crearProducto = crearProducto;
}
