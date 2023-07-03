// Obtener los enlaces y las secciones por sus IDs
const toggleAlimentos = document.getElementById('toggle-alimentos');
const alimentosSection = document.getElementById('alimentos');
const toggleRopas = document.getElementById('toggle-ropas');
const ropasSection = document.getElementById('ropas');
const toggleJuguetes = document.getElementById('toggle-jueguete');
const juguetesSection = document.getElementById('juguete');

// Variables para realizar seguimiento del estado de visibilidad de las secciones
let alimentosVisible = true;
let ropasVisible = true;
let juguetesVisible = true;
let alimentosStyle;
let ropasStyle;
let juguetesStyle;

// Funciones para ocultar o mostrar las secciones según su estado actual
function ocultarAlimentos() {
  alimentosStyle = alimentosSection.getAttribute('style'); // Guardar el estilo actual
  alimentosSection.style.display = 'none';
  alimentosVisible = false;
}

function mostrarAlimentos() {
    alimentosSection.setAttribute('style', alimentosStyle); // Restaurar el estilo guardado
    alimentosVisible = true;
}  

//ROPA
function ocultarRopas() {
    ropasStyle = ropasSection.getAttribute('style'); // Guardar el estilo actual
    ropasSection.style.display = 'none';
    ropasVisible = false;
}

function mostrarRopas() {
    ropasSection.setAttribute('style', ropasStyle); // Restaurar el estilo guardado
    ropasVisible = true;
}

//JUEGUETES
function ocultarJuguetes() {
    juguetesStyle = juguetesSection.getAttribute('style'); // Guardar el estilo actual
    juguetesSection.style.display = 'none';
    juguetesVisible = false;
}
  
function mostrarJuguetes() {
    juguetesSection.setAttribute('style', juguetesStyle); // Restaurar el estilo guardado
    juguetesVisible = true;
}


// Agregar eventos a los enlaces para alternar la visibilidad de las secciones
toggleAlimentos.addEventListener('click', function(event) {
  event.preventDefault();
  if (alimentosVisible) {
    ocultarAlimentos();
  } else {
    mostrarAlimentos();
  }
});

toggleRopas.addEventListener('click', function(event) {
  event.preventDefault();
  if (ropasVisible) {
    ocultarRopas();
  } else {
    mostrarRopas();
  }
});

toggleJuguetes.addEventListener('click', function(event) {
  event.preventDefault();
  if (juguetesVisible) {
    ocultarJuguetes();
  } else {
    mostrarJuguetes();
  }
});
