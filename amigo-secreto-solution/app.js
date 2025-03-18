// app.js
let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById("nombre");
    let nombre = nombreInput.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    nombreInput.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
