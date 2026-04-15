const tabla = document.querySelector("table");

let pagina = 1;
const filasPorPagina = 5;

document.getElementById("filtroCategoria").addEventListener("change", () => {
    pagina = 1;
    actualizar();
});

document.getElementById("ordenNombre").addEventListener("change", () => {
    pagina = 1;
    actualizar();
});

function actualizar() {
    const filtro = document.getElementById("filtroCategoria").value;
    const orden = document.getElementById("ordenNombre").value;

    let filas = Array.from(tabla.querySelectorAll("tr")).slice(1);

    // FILTRAR
    let filasFiltradas = filas.filter(fila => {
        const categoria = fila.children[5].textContent;
        return filtro === "todas" || categoria === filtro;
    });

    // ORDENAR
    if (orden === "asc") {
        filasFiltradas.sort((a, b) =>
            a.children[0].textContent.localeCompare(b.children[0].textContent)
        );
    } else if (orden === "desc") {
        filasFiltradas.sort((a, b) =>
            b.children[0].textContent.localeCompare(a.children[0].textContent)
        );
    }

    // PAGINACIÓN
    const inicio = (pagina - 1) * filasPorPagina;
    const fin = inicio + filasPorPagina;
    const filasPagina = filasFiltradas.slice(inicio, fin);

    // OCULTAR TODAS
    filas.forEach(f => f.style.display = "none");

    // MOSTRAR SOLO LAS DE LA PÁGINA
    filasPagina.forEach(f => {
        f.style.display = "";
        tabla.appendChild(f);
    });

    // ACTUALIZAR TEXTO PÁGINA
    document.getElementById("pagina-actual").textContent = pagina;
}

function cambiarPagina(direccion) {
    const filtro = document.getElementById("filtroCategoria").value;

    let filas = Array.from(tabla.querySelectorAll("tr")).slice(1);

    let filasFiltradas = filas.filter(fila => {
        const categoria = fila.children[5].textContent;
        return filtro === "todas" || categoria === filtro;
    });

    const totalPaginas = Math.ceil(filasFiltradas.length / filasPorPagina);

    pagina += direccion;

    if (pagina < 1) pagina = 1;
    if (pagina > totalPaginas) pagina = totalPaginas;

    actualizar();
}

// INICIALIZAR
actualizar();

// BOTÓN INICIO
document.getElementById("inicio").addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/inicio.html";
});

