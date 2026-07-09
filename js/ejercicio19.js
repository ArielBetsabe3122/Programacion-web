//guardamos en las variables lo que introdujo el usuario 
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
    //Utiliza el metodo trim para el texto
    const texto = input.value.trim(); 

    if (texto !== '') {
        //se crea un nuevo elemento en la lista 
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center mb-2 border rounded p-2 shadow-sm';
        
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo); 

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        //Se crea un boton 
        botonEliminar.addEventListener('click', function() {
            li.remove(); 
        }); 
        //creamos el evento para eliminar 
        botonEliminar.className = 'btn-eliminar btn-sm fw-semibold'
        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = '';
    } else {
        alert('escribe algo para agregar a la lista.');
    }
}
if (botonAgregar) {
        botonAgregar.addEventListener('click', agregarElemento);
    }