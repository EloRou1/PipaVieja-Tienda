const peticiones = []
class pedidos{
    constructor(nombre, apellido, email, telefono,envio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono =telefono;
        this.envio = envio;
    }
}


let pedido = {} ;

const  construirPedido  =  () =>{
    
    pedido = new pedidos(
        document.getElementById("nombre").value,
        document.getElementById("apellido").value,
        document.getElementById("email").value,
        document.getElementById("telefono").value,
        document.getElementById("envio").value
        )
    peticiones.push(pedido)
    console.log(peticiones)

} 

export{construirPedido}




