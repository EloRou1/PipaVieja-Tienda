 import { construirPedido } from "./pedidos.js";

const pintarFormulario = () =>{
    const contenedorFormulario = document.getElementById("formulario-contenedor")
    contenedorFormulario.innerHTML= `
    <form id="formulario-pedidos" action="">
        <label  class="label-formulario" for="nombre">Nombre</label>
        <input class="input-formulario" id="nombre" type="text">
        <label class="label-formulario" for="apellido">Apellido</label>
        <input class="input-formulario" id= "apellido" type="text">
        <label class="label-formulario" for="email">Correo Electronico</label>
        <input class="input-formulario" id="email" type="text">
        <label class="label-formulario" for="telefono">Telefono</label>
        <input class="input-formulario" id="telefono" type="number">
        <label class="label-formulario" for="envio">¿Quiere envio a domicilio?</label>
        <select class="input-Formulario" name="envioSi-envioNo" id="selectorenvio">
            <option value="si">Si</option>
            <option value="no">No</option>
        </select>
        <input id= "btn-submit" type="submit" value="Enviar">
        <input id= "btn-reset" type="reset" value="Borrar">
    </form>
`
    
};

const btnSubmit = document.getElementById("btn-submit")
if(btnSubmit){
    btnSubmit.addEventListener("click",construirPedido())
}



export{pintarFormulario}

