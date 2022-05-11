const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");


function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;

}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;

}

function encriptar(textoParaEncriptar){
    let matrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    textoParaEncriptar = textoParaEncriptar.toLowerCase();
    let ocultarImagen = document.querySelector("#noTieneTexto");
    let mostrarTexto = document.querySelector("#tieneTexto");
    for (let i=0; i<matrizCodigo.length ;i++){
        if(textoParaEncriptar.includes(matrizCodigo[i][0])){
            textoParaEncriptar = textoParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    
    ocultarImagen.classList.add("hidden");
    mostrarTexto.classList.remove("hidden");
     
    return textoParaEncriptar;
}

function desencriptar(textoParaDesencriptar){
    let matrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    textoParaDesencriptar = textoParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length ;i++){
        if(textoParaDesencriptar.includes(matrizCodigo[i][1])){
            textoParaDesencriptar = textoParaDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return textoParaDesencriptar;
}

function copiarTexto(){
    let copia = document.querySelector("input-text-area").value;

    navigator.clipboard.writeText(copia)

    alert ("el texto Fue copiado al portapapeles")
}