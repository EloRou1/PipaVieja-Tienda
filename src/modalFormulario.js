import { pintarFormulario } from "./accionesFormulario.js";


const modalContenedor2 = document.querySelector(".modal-contenedor2")
const abrirFormulario = document.getElementById("btn-finalizar-compra")
const cerrarFormulario = document.getElementById("btn-cerrar-formulario")


abrirFormulario.addEventListener('click', () => {
    modalContenedor2.classList.toggle('modal-active')
    pintarFormulario()
});
cerrarFormulario.addEventListener('click', () => {
    modalContenedor2.classList.toggle('modal-active')
    
});





