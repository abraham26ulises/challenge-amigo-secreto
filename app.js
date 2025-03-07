// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    console.log(typeof nombreAmigo);
    
    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre");
        return;
    }

    amigos.push(nombreAmigo);
    console.log(amigos);

    document.getElementById('amigo').value = '';
}
