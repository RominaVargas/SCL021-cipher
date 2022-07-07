import cipher from './cipher.js';

function onClickEncriptar() {
  
    const txtMensaje = document.getElementById("txtMensaje").value;
    const desplazamiento = document.getElementById("offset").value;
    const txtMensajeEncriptado= cipher.encode(txtMensaje,desplazamiento );
     document.getElementById("txtMensajeEncriptado").value=txtMensajeEncriptado;           

}

function onClickDescifrar (){ 
   const txtMensajeEncriptado= document.getElementById("txtMensajeEncriptado").value;
   const desplazamiento= document.getElementById("offset").value;
   const txtDescencriptado=cipher.decode(txtMensajeEncriptado,desplazamiento);
   document.getElementById("txtMensaje2").value=txtDescencriptado;
   console.log (txtDescencriptado)

}
function onKeypress (event){ 

    const txtMensaje = document.getElementById("txtMensaje");
    txtMensaje.value=txtMensaje.value.toUpperCase()
}       // .toUpperCase es el que transforma a mayuscula un string 

document.getElementById("btnDescifrar").addEventListener("click", onClickDescifrar)
document.getElementById("btnCifrar").addEventListener("click", onClickEncriptar)
document.getElementById("txtMensaje").addEventListener('keyup', onKeypress);
console.log(cipher);
