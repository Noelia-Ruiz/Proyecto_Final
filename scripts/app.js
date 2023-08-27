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

//Usamos JavaScript para agregar el comportamiento de abrir y cerrar el menú al hacer clic en el icono de hamburguesa.
document.addEventListener("DOMContentLoaded", function() {
    const hamburguesa = document.querySelector(".hamburguesa");
    const header = document.querySelector("header");

    hamburguesa.addEventListener("click", function() {
        header.classList.toggle("menu-active");
    });
});

//usamos una función para mostrar la cantidad de visitantes que tenemos en nuestra web
// Obtenemos el elemento de clic por su ID, en este caso le psimos 'contador_click'
const clickElement = document.getElementById('contador_click');

// Inicializar el contador en 0
let contador_click = 0; //para poder empezar a contar en cada recarga de la página

// Función que se ejecuta cuando se hace clic en el elemento
function hacerClick() { //le colocamos un nombre sper intuitivo xD
    contador_click++; //vamos incrementando el contador en 1 cada vez que llamamos a la función
    clickElement.textContent = `Sos el visitante número ${contador_click}`; //concatenamos la variable con el contador al string
}

// Agregar un evento de clic al elemento
clickElement.addEventListener('click', hacerClick);