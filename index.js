const txtDesencriptado = document.getElementById("txt--desencriptado");
const txtEncriptado = document.getElementById("txt--encriptado");
const btnEncriptar = document.getElementById("btn_encriptar");
const btnDesencriptar = document.getElementById("btn_desencriptar");

const btnCopiarTxtEncriptado = document.querySelector(".btn-copiarEncriptado");
const btnCopiarTxtDesencriptado = document.querySelector(".btn-copiarDesencriptado");

const contenTxtEncriptado = document.querySelector(".cont_txt--encriptado");
const contenImgAndTitle = document.querySelector(".cont_img-title");

let validaMayuscula = true;
let validaAcentos = true;

/**
 * funcion para encriptar con regex y replace
 */
function encriptarTxt() {

    contieneMayusculas(txtDesencriptado);
    contieneAcentos(txtDesencriptado);

    if(txtDesencriptado.value != '' && validaMayuscula && validaAcentos){
        txtEncriptado.value  = txtDesencriptado.value.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        alturaTextArea();
    }
}

/**
 * fun para desencriptar con regex y replace
 */
function desencriptarTxt() {

    contieneMayusculas(txtEncriptado);
    contieneAcentos(txtEncriptado);

    if(txtEncriptado.value != '' && validaMayuscula && validaAcentos){        
        txtDesencriptado.value  = txtEncriptado.value.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        alturaTextArea();
    }
}

/**
 * esta funcion es para los textArea se adapten al alto del contenido
 */
 function alturaTextArea(){
    compruebaTxt();
    txtDesencriptado.style.height = `${txtDesencriptado.scrollHeight}px`;
    txtEncriptado.style.height = `${txtEncriptado.scrollHeight}px`;
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

/**
 * Funcion para saber si el texto ingresado contiene mayusculas
 * se usa regex para eleminar los espacios en blanco donde causaba error
 */
function contieneMayusculas(texto){

    //retira los espacios en blanco
    const cadena = texto.value.replace(/ /g, "");

    for (const char of cadena){
        let charMayuscula = char.toUpperCase();

        if (char == charMayuscula){
            alert('Letra mayuscula detectada: ' + char);
            validaMayuscula = false;    
            break
        }else {
            validaMayuscula = true;
        }
    }


    
}
/*
* funcion para valida acentos, 
* si se encuentra las palabras acentadas devuele true y evita la ejecucion de codigo
*/
function contieneAcentos(texto){
    
    const cadena = texto.value.replace(/ /g, "");
       
   // si encuentra acentos devuelve false 
   validaAcentos = /^[a-zA-Z]+$/.test(cadena) 
  
    if(!validaAcentos){
        alert(`El contenido del texto no debe tener tíldes y masyusculas`)
    }
}



function copiarTxtEncriptado() {    
    txtEncriptado.select();
    document.execCommand('copy')
    alert("Texto encriptado copiado");

}

function copiarTxtDesencriptado() {    
    txtDesencriptado.select();
    document.execCommand('copy')
    alert("Texto deseencriptado copiado");

}



txtDesencriptado.oninput = alturaTextArea;
txtEncriptado.oninput = alturaTextArea;
btnEncriptar.onclick = encriptarTxt;
btnDesencriptar.onclick = desencriptarTxt;
btnCopiarTxtEncriptado.onclick = copiarTxtEncriptado;
btnCopiarTxtDesencriptado.onclick = copiarTxtDesencriptado;