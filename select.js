//JSON, diccionario, llave y valor
const dataEstamento = ["Funcionario","Académico","Estudiante (Pregrado)","Estudiante (Postgrado)"];
const dataComuna = ["Alhué","Buin","Calera de Tango","Cerrillos","Cerro Navia","Colina","Conchalí","Curacaví","El Bosque","El Monte","Estación Central","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","María Pinto","Melipilla","Ñuñoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Peñaflor","Peñalolén","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquín","San José de Maipo","San Miguel","San Pedro","San Ramón","Santiago","Talagante","Tiltil","Vitacura","Otro"];
const dataCategoria = ["Artística","Deportivas","Tecnologías","Sociales","Recreativas","Otro"]

//Crea opciones dentro de un select
const poblarEstamentos = () => {
    let estamentoSelect = document.getElementById("estamento");
    for (const estamento of dataEstamento) {
      let option = document.createElement("option");
      //lo que se envía a JS
      option.value = estamento;
      //lo que ve el ususario
      option.text = estamento;
      estamentoSelect.appendChild(option);
    }
  };

const poblarComunas = () => {
    let comunaSelect = document.getElementById("comuna");
    for (const comuna of dataComuna) {
      let option = document.createElement("option");
      //lo que se envía a JS
      option.value = comuna;
      //lo que ve el ususario
      option.text = comuna;
      comunaSelect.appendChild(option);
    }
  };  

  const poblarCategorias = () => {
    let categoriaSelect = document.getElementById("categoria");
    for (const categoria of dataCategoria) {
      let option = document.createElement("option");
      //lo que se envía a JS
      option.value = categoria;
      //lo que ve el ususario
      option.text = categoria;
      categoriaSelect.appendChild(option);
    }
  };  


  const changeArguments = () => {
  // comuna
  const comuna = document.getElementById("comuna");
  const reasonLabel = document.querySelector("label[for='comuna-otro']");
  const reasonTextarea = document.getElementById("comuna-otro");

  if(comuna.value == "Otro") {
    reasonLabel.style.display = "block";
    reasonTextarea.style.display = "block";
    reasonTextarea.required = true;
  } else {
    reasonLabel.style.display = "none";
    reasonTextarea.style.display = "none";
    reasonTextarea.required = false;
  }

  // categoria
  const categoria = document.getElementById("categoria");
  const catLabel = document.querySelector("label[for='categoria-otro']");
  const catTextarea = document.getElementById("categoria-otro");

  if(categoria.value == "Otro") {
    catLabel.style.display = "block";
    catTextarea.style.display = "block";
    catTextarea.required = true;
  } else {
    catLabel.style.display = "none";
    catTextarea.style.display = "none";
    catTextarea.required = false;
  }
};

document.getElementById("comuna").addEventListener("change", changeArguments);
document.getElementById("categoria").addEventListener("change", changeArguments);

//cuando la ventana se carga, se ejecuta cierto código
window.onload = () => {
  poblarEstamentos();
  poblarComunas();
  poblarCategorias();
};
  