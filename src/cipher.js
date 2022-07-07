const cipher = {
  encode: (txtMensaje, offset) => {

    let resultado = ""; 
//va vacia para que se modifique despues
offset = (offset % 26 + 26) % 26; 
   
    for (let i = 0; i < txtMensaje.length; i++) {
      let ascii = txtMensaje.charCodeAt(i);
      if (ascii >=65 && ascii <= 90) {
      let asciiModificado = (ascii - 65 + offset) % 26 + 65;
      resultado = resultado + String.fromCharCode(asciiModificado);
    }
         if (ascii === 32){
     resultado += " ";
          }
    }
    return resultado;
  },

  decode: (txtMensajeEncriptado, offset) => {

    let resultado = "";
    offset = (offset % 26 - 26) % 26;
    if (txtMensajeEncriptado) {
      for (let i = 0; i < txtMensajeEncriptado.length; i++) {
        let ascii = txtMensajeEncriptado.charCodeAt(i);
        if (ascii >=65 && ascii <= 90) {
        let asciiModificado = (ascii - 65 - offset) % 26 + 65;
        // console.log(String.fromCharCode(asciiModificado))
        resultado = resultado + String.fromCharCode(asciiModificado);
      }
      if (ascii === 32){
        resultado += " ";
      }
    }
    return resultado;
  }
}
}
export default cipher;