// Constantes con mensajes de error o de envío efectivo de
// información usados en el formulario de contacto.
const msjError = "Debe completar los campos.";
const msjEnvio = "En breve me comunicaré con usted. Saludos.";

/**
 * Funcion que permite obtener la barra de menú mediante su
 * identificador y verifica si su nombre es menu o menu 
 * responsive, para proceder a mostrar el mismo de una manera
 * horizontal o comprimida.
 */ 
function mostrarMenu() {
  var x = document.getElementById("menuCV");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

/**
 * Permite saber si fue presionado el botón para enviar
 * la información de contacto.
 */
document.getElementById("btnEnviar").onclick = function(){
  
  
  /** 
   * Toma los ingresos a las cajas de texto y los
   * almacena en las variables.
   * 
   * */ 
  let nombre = document.getElementById("txtNombre").value;
  let telefono = document.getElementById("txtTelefono").value;
  let email = document.getElementById("txtEmail").value;
  let comentario = document.getElementById("txtComentario").value;
  
  
  /**
   * Verifica que esten llenas las cajas de texto yel area de texto
   * para enviar la información de contacto.
   */
  if(nombre=="" || telefono=="" || email=="" || comentario==""){
    alert("Faltan datos por completar.")
    document.getElementById("errMensaje").style.display="flex";
    document.getElementById("errMensaje").style.backgroundColor="darkred";
    document.getElementById("errMensaje").innerHTML=msjError
    
    
  }else{
    alert("Responderemos a la brevedad.")
    document.getElementById("errMensaje").style.display="flex";
    document.getElementById("errMensaje").style.backgroundColor="darkgreen";
    document.getElementById("errMensaje").innerHTML=msjEnvio

    deshabilitarEntradas(true)


  }
  
  
}

/**
 * Función que permite habiliar o deshabilitar las entradas
 * de información acorde a si el parámetro ingresado es
 * true o false 
 * @param {*} estado 
 */
function deshabilitarEntradas(estado){
  document.getElementById("txtNombre").disabled = estado;
  document.getElementById("txtEmail").disabled = estado;
  document.getElementById("txtTelefono").disabled = estado;
  document.getElementById("txtComentario").disabled = estado;
  document.getElementById("btnEnviar").disabled = estado;
  
}