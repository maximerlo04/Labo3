document.querySelectorAll('.personaje-img').forEach(function(img) {
    img.addEventListener('click', function() {
        
        const contenido = this.parentElement.querySelector('.oculto').innerHTML;
        
      
        document.getElementById('modalContent').innerHTML = contenido;
        document.getElementById('ventana').classList.add('modalEncendido');
    });
});


document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('ventana').classList.remove('modalEncendido');
});