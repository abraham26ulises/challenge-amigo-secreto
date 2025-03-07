// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre");
        return;
    }
    amigos.push(nombreAmigo);
    console.log(amigos);
    console.log(amigos.length);
    document.getElementById('amigo').value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement("li");
        li.textContent = amigos[index];
        lista.appendChild(li);
        console.log("Lista actualizada");
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre para sortear");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    console.log(amigoSorteado);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`; 

}
