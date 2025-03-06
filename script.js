// Countdown timer
var today = new Date();
var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0, 0);
var countdownDate = tomorrow.getTime();
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "A oferta terminou!";
    }
}, 300);
// Product filter
function filterProducts() {
    var selectedCategory = document.getElementById("categoryFilter").value;
    var productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function(card) {
        if (selectedCategory === "all" || card.getAttribute("data-category") === selectedCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
async function buscarTodosUsuarios() {
    let resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    let usuarios = await resposta.json();
    return usuarios;
}
async function exibirUsuarios() {
    const usuariosText = document.getElementById("usuarios");
    const usuarios = await buscarTodosUsuarios();

    for await (const usuario of usuarios) {
        const div = document.createElement("div");
        div.innerHTML = `<p>ID: ${usuario.id} <br> Nome: ${usuario.name} <br> Email: ${usuario.email}</p>`;
        div.className = "users-card";
        usuariosText.appendChild(div);
    } 
}
