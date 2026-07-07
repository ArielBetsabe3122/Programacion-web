
var input = document.getElementById('nuevoElemento');
var botonAgregar = document.getElementById('agregarBtn');
var lista = document.getElementById('lista');


function agregarElemento() {
    var texto = input.value.trim(); 

    if (texto !== '') {
        var li = document.createElement('li');
        
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        var textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo); 

        var botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn btn-outline-danger btn-sm fw-bold';
        
        botonEliminar.addEventListener('click', function() {
            li.remove(); 
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = '';
        input.focus();
    } else {
        alert('Por favor, escribe algo para agregar a la lista.');
    }
}

// Asignar la función al botón de agregar
botonAgregar.addEventListener('click', agregarElemento);