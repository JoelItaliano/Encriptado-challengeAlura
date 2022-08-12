const txtDesencriptado = document.getElementById("txt--desencriptado");
const txtEncriptado = document.getElementById("txt--encriptado");
const btnEncriptar = document.getElementById("btn_encriptar");
const btnDesencriptar = document.getElementById("btn_desencriptar")

const contenTxtEncriptado = document.querySelector(".cont_txt--encriptado")
const contenImgAndTitle = document.querySelector(".cont_img-title")



/**
 * funcion para encriptar con regex y replace
 */
function encriptarTxt() {

    if(txtDesencriptado.value != ''){
        txtEncriptado.value  = txtDesencriptado.value.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        alturaTextArea();
    }
}

/**
 * fun para desencriptar con regex y replace
 */
function desencriptarTxt() {
    if(txtEncriptado.value != ''){        
        txtDesencriptado.value  = txtEncriptado.value.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        alturaTextArea()
    }
}

/**
 * esta funcion es para los textArea se adapten al alto del contenido
 */
 function alturaTextArea(){
    compruebaTxt();
    txtDesencriptado.style.height = `${txtDesencriptado.scrollHeight}px`;
    txtEncriptado.style.height = `${txtEncriptado.scrollHeight}px`

}



/**
 * funcion que comprueba que: si no hay texto en box encripado
 * reaparece img y title
 */
function compruebaTxt() {

    if (txtEncriptado.value === ''){
        contenImgAndTitle.style.display = 'inline';
        contenTxtEncriptado.style.justifyContent = 'center';
        txtEncriptado.style.fontSize = "16px";
    }else{
        styleContenTxtEncriptado();
    }
    
}

/*
* Funcion que que cambia los estilos a contenedor para ajustar el texto encriptado
*/
function styleContenTxtEncriptado(){        
    contenImgAndTitle.style.display = "none";
    contenTxtEncriptado.style.justifyContent = "start";
    txtEncriptado.style.fontSize = "25px";   
} 


txtDesencriptado.oninput = alturaTextArea;
txtEncriptado.oninput = alturaTextArea;
btnEncriptar.onclick = encriptarTxt;
btnDesencriptar.onclick = desencriptarTxt;