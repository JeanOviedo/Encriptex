/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

window.addEventListener("load", cargaPagina);
function cargaPagina() {
  var btn = document
    .getElementById("btn-encriptar")
    .addEventListener("click", cambiaValores);

  var btn2 = document
    .getElementById("btn-desencriptar")
    .addEventListener("click", cambiaValoresDes);
}

const transactionForm = document.getElementById("transactionForm");
transactionForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

function cambiaValores() {
  let textoencriptar = document.getElementById("input-texto").value;

  let encriptando = textoencriptar.replace(/e/g, "enter");
  encriptando = encriptando.replace(/i/g, "imes");
  console.log("imes", encriptando);
  encriptando = encriptando.replace(/a/g, "ai");
  console.log("ai", encriptando);
  encriptando = encriptando.replace(/o/g, "ober");
  console.log("o", encriptando);
  encriptando = encriptando.replace(/u/g, "ufat");
  console.log("u", encriptando);

  var inputNombre = document.getElementById("msg");
  inputNombre.value = encriptando;
}

function cambiaValoresDes() {
  let textodesencriptar = document.getElementById("input-texto").value;

  let encriptando = textodesencriptar.replace(/enter/g, "e");
  encriptando = encriptando.replace(/imes/g, "i");
  console.log("imes", encriptando);
  encriptando = encriptando.replace(/ai/g, "a");
  console.log("ai", encriptando);
  encriptando = encriptando.replace(/ober/g, "o");
  console.log("o", encriptando);
  encriptando = encriptando.replace(/ufat/g, "u");
  console.log("u", encriptando);

  var inputNombre = document.getElementById("msg");
  inputNombre.value = encriptando;
}
