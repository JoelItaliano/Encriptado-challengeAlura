const txtDesencriptado = document.getElementById("txt--desencriptado");
const txtEncriptado = document.getElementById("txt--encriptado");
const btnEncriptar = document.getElementById("btn_encriptar");



/**
 * funcion para encriptar con regex y replace
 */
function encriptarTxt() {
    if(txtDesencriptado.value != ''){
        txtEncriptado.value  = txtDesencriptado.value.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    }
}

/**
 * esta funcion es para los textArea se adapten al alto del contenido
 */
function alturaTextArea(cajaTexto){
    txtDesencriptado.style.height = `${txtDesencriptado.scrollHeight}px`;
    txtEncriptado.style.height = `${txtEncriptado.scrollHeight}px`
}
 


txtDesencriptado.oninput = alturaTextArea;
txtEncriptado.oninput = alturaTextArea;
btnEncriptar.onclick = encriptarTxt;