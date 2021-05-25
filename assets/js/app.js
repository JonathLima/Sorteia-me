let button = document.getElementById('btn');

// Evento para sortear o número aleatório

button.addEventListener("click", () => {

    let np = document.getElementById("number").value;

    let ns = Math.floor(Math.random() * np + 1);

    document.getElementById("result").innerHTML = ns
   
});
