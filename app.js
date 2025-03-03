// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// El valor amigos es un array vacio donde se va estar almacenando los nombrres de tus amigos
let amigos = [];
let maximo = 5;

// Se crea la funcion agregar amigo
function agregarAmigo(){
    let ingresarAmigo = document.getElementById("amigo");
    let amigoNombre = ingresarAmigo.value;

    if(!amigoNombre){
        alert('Debes de ingresar un nombre');
        return;
    }
    amigos.push(amigoNombre);
    renderizarAmigos();    
}
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let objecto = document.createElement("li");
        objecto.textContent = amigos[i];
        listaAmigos.appendChild(objecto);

    }
}

function sortearAmigo(){
    if(amigos === 0){
        alert("Error, no hay amigos para sortear");
        return;
    }

    let amigosSorteados = amigos[Math.floor(Math.random()*maximo)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es :  ${amigosSorteados}`;

    let limpiar = document.getElementById("listaAmigos");
    limpiar.innerHTML = "";

}

