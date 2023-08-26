//Usamos el evento "DOMContentLoaded", que ocurre cuando el contenido de la página se ha cargado. 
document.addEventListener("DOMContentLoaded", function() {
    //En esta función, obtenemos el formulario y el botón de envío por sus respectivos ID.
    const form = document.getElementById("form"); //acá declaramos una constante para traer el elemento html por id, que en este caso es "form"
    const clickear_boton = document.getElementById("enviar"); //en esta constante, agarramos el click del botón de envio

    //acá escuchamos el evento del botón 'submit' y lo parametramos a la función
    form.addEventListener("submit", function(event) {
        //Dentro del evento "submit", utilizamos event.preventDefault() para evitar que el formulario se envíe automáticamente y recargue la página. 
        event.preventDefault(); 
        // Mostramos el mensaje de envio con éxito
        enviarMensaje("Tu mensaje fue enviado con éxito.");
    });

    //creamos la función 'enviarMensaje' para mostrar por pantalla que el mensaje se envió correctamente
    function enviarMensaje(mensaje) { //como parámetro pasamos un mensaje
        const mensajeDiv = document.createElement("div"); //esta constante crea un div en el html
        mensajeDiv.className = "success-message"; //la clase de que el mensaje se envió con éxito
        mensajeDiv.textContent = mensaje; //el div contendrá el mensaje que pasamos: en este caso que el envío se dió con éxito

        document.body.appendChild(mensajeDiv); //apendChild: El mensaje se añade como un hijo del body. 

        //hacemos que el mensaje desaparezca de la pantalla luego de 3 segundos
        setTimeout(function() {
            document.body.removeChild(mensajeDiv);
        }, 3000); // Desaparecerá después de 3 segundos, usamos 3000 porque en informática, las medidas se usan/escriben en milisegundos
    }
});
