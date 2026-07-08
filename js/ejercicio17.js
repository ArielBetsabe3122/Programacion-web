
var Tarea = document.getElementById("nuevaTarea");
var btnAgregar = document.getElementById("btnAgregarTarea");
var contenedorLista = document.getElementById("listaTareas");
var errorTarea = document.getElementById("errorTarea");
var CLAVE_STORAGE = "tareas_devsolutions";
//aqui se guardan la lista de tareas en la memoria del navegador 


function obtenerTareas() {
    var datos = localStorage.getItem(CLAVE_STORAGE);
    if (datos) {
        return JSON.parse(datos);
    } else {
        return [];
    }
}

function guardarTareas(tareas) {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
}

function renderizarTareas() {
    contenedorLista.innerHTML = ""; // Limpia el contenedor antes de reescribir
    
    var tareasActuales = obtenerTareas();

    if (tareasActuales.length === 0) {
        contenedorLista.innerHTML = '<li class="list-group-item text-muted text-center small py-3">No hay tareas pendientes.</li>';
        return;
    }

    tareasActuales.forEach(function(tarea) {
        var li = document.createElement("li");
        
        // Clases nativas de Bootstrap 
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2 border rounded p-3 shadow-sm";
        
        // estructura con el botón de borrar asignado a su ID único
        li.innerHTML = 
            '<span class="fw-medium text-dark">' + tarea.texto + '</span>' +
            '<button class="btn btn-danger btn-sm fw-semibold" onclick="confirmarEliminacion(' + tarea.id + ')">Eliminar</button>';
        
        contenedorLista.appendChild(li);
    });
}

//funcion agregar tarea 
function procesarAgregarTarea() {
    var texto = Tarea.value.trim();

    limpiarError();

    // Validación de campo vacío
    if (texto === "") {
        mostrarError("Por favor, describe la tarea antes de agregarla.");
        return;
    }

    var tareas = obtenerTareas();
    tareas.push({
        id: Date.now(), // ID único basado en tiempo
        texto: texto
    });
    guardarTareas(tareas);

    Tarea.value = ""; // Limpiamos el campo
    renderizarTareas();    // Actualizamos la interfaz
}


function confirmarEliminacion(idTarea) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Esta acción eliminará de forma permanente la tarea pendiente.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#927bc0', 
        cancelButtonColor: '#cbd5e1',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then(function(result) {
        if (result.isConfirmed) {
            var tareas = obtenerTareas();
            
            // Filtramos quitando la tarea seleccionada
            var tareasFiltradas = tareas.filter(function(tarea) {
                return tarea.id !== idTarea;
            });
            
            guardarTareas(tareasFiltradas);
            renderizarTareas(); 

            Swal.fire({
                title: '¡Eliminado!',
                text: 'La tarea ha sido borrada con éxito.',
                icon: 'success',
                confirmButtonColor: '#927bc0'
            });
        }
    });
}


function mostrarError(mensaje) {
    if (errorTarea) errorTarea.textContent = mensaje;
    if (Tarea) Tarea.classList.add("is-invalid"); // Clase nativa de error de Bootstrap
}

function limpiarError() {
    if (errorTarea) errorTarea.textContent = "";
    if (Tarea) Tarea.classList.remove("is-invalid");
}

if (btnAgregar) {
    btnAgregar.addEventListener("click", procesarAgregarTarea);
}

if (Tarea) {
    Tarea.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            procesarAgregarTarea();
        }
    });
}

// Carga inicial al abrir la página
document.addEventListener("DOMContentLoaded", renderizarTareas);