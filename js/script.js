// Leemos campo para recirbir el dato a encriptar
const textoIngresado = document.querySelector("#texto");

// Leemos campo para mostrar el dato encriptado
const textoResultado = document.querySelector("#textoResultado");

// Leemos botones para encriptar y desencriptar
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");

// Boton para copiar
const btnCopiar = document.querySelector("#copiar");

function encriptar (){
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");

  // Leemos el div con el contenido cuando aun no se inserta ninguna dato para encriptar y lo ocultamos
  document.getElementById("noResuelto").style.visibility = "hidden";

  // Mostramos el boton copiar
  document.getElementById("copiar").style.visibility = "visible";

  
  textoResultado.value = textoEncriptado;

  document.getElementById("texto").value = '';

}

function desencriptar (){
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = '';

}

function copiar () {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;



