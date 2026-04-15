let resgistrarBtn = document.getElementById("registrar");
let listaBtn = document.getElementById("lista");
let estadisticaBtn = document.getElementById("estadistica");

resgistrarBtn.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/resgistrar.html"
});

listaBtn.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/lista.html"
});

estadisticaBtn.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/estadistica.html"
});