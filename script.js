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
  let btn = document
    .getElementById("btn-encriptar")
    .addEventListener("click", cambiaValores);

  let btn2 = document
    .getElementById("btn-desencriptar")
    .addEventListener("click", cambiaValoresDes);

  let btn3 = document
    .getElementById("btn-copy")
    .addEventListener("click", Copy);
}

const transactionForm = document.getElementById("transactionForm");
transactionForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

function cambiaValores() {
  let textoencriptar = document.getElementById("input-texto").value;
  textoencriptar = textoencriptar.toLowerCase();
  textoencriptar = textoencriptar
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (!textoencriptar) {
    div1 = document.getElementById("rellene");
    div1.style.display = "";
  } else {
    let encriptando = textoencriptar.replace(/e/g, "enter");

    encriptando = encriptando.replace(/i/g, "imes");
    console.log("imes", encriptando);
    encriptando = encriptando.replace(/a/g, "ai");
    console.log("ai", encriptando);
    encriptando = encriptando.replace(/o/g, "ober");
    console.log("o", encriptando);
    encriptando = encriptando.replace(/u/g, "ufat");
    console.log("u", encriptando);

    let inputNombre = document.getElementById("msg");
    inputNombre.value = encriptando;
    div = document.getElementById("copi");
    div.style.display = "none";
    div3 = document.getElementById("rellene");
    div3.style.display = "none";
    div31 = document.getElementById("no");
    div31.style.display = "none";
  }
}

function cambiaValoresDes() {
  let textodesencriptar = document.getElementById("input-texto").value;
  textodesencriptar = textodesencriptar.toLowerCase();
  textodesencriptar = textodesencriptar
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (!textodesencriptar) {
    div1 = document.getElementById("rellene");
    div1.style.display = "";
  } else {
    let encriptando = textodesencriptar.replace(/enter/g, "e");

    encriptando = encriptando.replace(/imes/g, "i");
    console.log("imes", encriptando);
    encriptando = encriptando.replace(/ai/g, "a");
    console.log("ai", encriptando);
    encriptando = encriptando.replace(/ober/g, "o");
    console.log("o", encriptando);
    encriptando = encriptando.replace(/ufat/g, "u");
    console.log("u", encriptando);

    let inputNombre = document.getElementById("msg");
    inputNombre.value = encriptando;
    div = document.getElementById("copi");
    div.style.display = "none";
    div3 = document.getElementById("rellene");
    div3.style.display = "none";
    div31 = document.getElementById("no");
    div31.style.display = "none";
  }
}

function inutil() {}
// function Copiado() {
//   div = document.getElementById("copi");
//   div.style.display = "";
// }

function Copy() {
  let content = document.getElementById("msg");
  let textocopiar = document.getElementById("msg").value;
  let no = document.getElementById("no");
  let copi = document.getElementById("copi");
  if (!textocopiar) {
    no.style.display = "";
    copi.style.display = "none";
    // alert("No se puede copiar vacio");
  } else {
    no.style.display = "none";
    copi.style.display = "";
    content.select();
    document.execCommand("copy");
  }
}
