// --- VALIDADORES ---

//<div class="telefono">
//  <span>+569</span>
//  <input type="text" />
//</div>
//.telefono {
//  display: flex;
//  align-items: center; /* los alinea verticalmente */
//  gap: 5px; /* espacio entre ambos */
//}

//revisar esto, que es para poner +569 al lado de telefono

const validadorGeneral = (input) => {
  if(!input) return false;
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
  return regex.test(input);
};

const validadorNombre = validadorGeneral;
const validadorApellido = validadorGeneral;

const validadorMail = (mail) => {
  if(!mail) return false;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(mail);
}

const validadorTelefono = (numero) => {
  if(!numero) return false;
  const regexNumbers = /^\d+$/;
  return regexNumbers.test(numero) && numero.length == 8;
};

const validadorSelect = (input) => {
  if (!input) return false;
  return input.value !== "";
}

const validadorEstamento = validadorSelect;
const validadorComuna = validadorSelect;
const validadorCategoria = validadorSelect;

const validadorHora = (horaI, horaF) => {
  if (!horaI || !horaF) return false;

  const inicio = horaI.value;
  const fin = horaF.value;

  if (inicio === "" || fin === "") return false;

  return inicio < fin;
}

const validadorDias = () => {
  const checkboxes = document.querySelectorAll("input[name='dia']");
  return Array.from(checkboxes).some(cb => cb.checked);
};

const validadorGeneral2 = (input) => {
  if(!input) return false;
  const regex = /[a-zA-Z]/;
  return regex.test(input)
}

const validadorNombreAct = validadorGeneral2;
const validadorDescripcion = validadorGeneral2;

const validadorFiles = (files) => {
  if (!files) return false;

  let lengthValid = 1 <= files.length && files.length <= 3;

  let typeValid = true;

  for (const file of files) {
  let type = file.type.split("/")[0];
  typeValid &&= (type === "image" || type === "video");
  }

  return lengthValid && typeValid;
};

const validadorLink = (input) => {
  if (!input) return true;
  return input.checkValidity();
};


const validarForm = () => {
 
  console.log("Enviando...");

  let nombreInput = document.getElementById("nombre");
  let apellidoInput = document.getElementById("apellido");
  let emailInput = document.getElementById("email");
  let telefonoInput = document.getElementById("telefono");
  let estamentoSelect = document.getElementById("estamento");

  let nombreActInput = document.getElementById("nombreAct");
  let comunaSelect = document.getElementById("comuna");
  let categoriaSelect = document.getElementById("categoria");
  let diasCheckboxes = document.querySelectorAll("#dias-input input[type='checkbox']");
  let horaInput1 = document.getElementById("hora-inicio");
  let horaInput2 = document.getElementById("hora-fin");
  let descripcionInput = document.getElementById("descripcion");
  let filesInput = document.getElementById("files");
  let linkInput = document.getElementById("link");


  let validationBoxNombre = document.getElementById("val-box-nombre");
  let validationElemNombre = document.getElementById("val-text-nombre"); 
  let validationBoxApellido = document.getElementById("val-box-apellido");
  let validationElemApellido = document.getElementById("val-text-apellido"); 
  let validationBoxEmail = document.getElementById("val-box-email");
  let validationElemEmail = document.getElementById("val-text-email"); 
  let validationBoxTelefono = document.getElementById("val-box-telefono");
  let validationElemTelefono = document.getElementById("val-text-telefono"); 
  let validationBoxEstamento = document.getElementById("val-box-estamento");
  let validationElemEstamento = document.getElementById("val-text-estamento"); 

  let validationBoxNombreAct = document.getElementById("val-box-nombreAct");
  let validationElemNombreAct = document.getElementById("val-text-nombreAct"); 
  let validationBoxComuna = document.getElementById("val-box-comuna");
  let validationElemComuna = document.getElementById("val-text-comuna");
  let validationBoxCategoria = document.getElementById("val-box-categoria");
  let validationElemCategoria = document.getElementById("val-text-categoria");
  let validationBoxHora = document.getElementById("val-box-hora");
  let validationElemHora = document.getElementById("val-text-hora");
  let validationBoxDias = document.getElementById("val-box-dia");
  let validationElemDias = document.getElementById("val-text-dia");
  let validationBoxDescripcion = document.getElementById("val-box-descripcion");
  let validationElemDescripcion = document.getElementById("val-text-descripcion"); 
  let validationBoxFiles = document.getElementById("val-box-files");
  let validationElemFiles = document.getElementById("val-text-files");
  let validationBoxLink = document.getElementById("val-box-link");
  let validationElemLink = document.getElementById("val-text-link");

  let emptyInput = "Complete este campo";
  let isValid = true

  if (!validadorNombre(nombreInput.value)) {
    isValid &&= false;
    let invalidInput = ""
    if(!nombreInput.value){
      invalidInput = emptyInput;
    } else {
      invalidInput = "Formato de nombre incorrecto. Solo debe contener letras"
    }
    validationElemNombre.textContent = ""
    validationElemNombre.innerText = invalidInput
    validationBoxNombre.style.backgroundColor = "#ffdddd";
    validationBoxNombre.style.borderLeftColor = "#f44336";
    validationBoxNombre.hidden = false;
    nombreInput.style.borderColor = "red";
  } else {
    validationBoxNombre.hidden = true;
    nombreInput.style.borderColor = "";
  }

  if (!validadorApellido(apellidoInput.value)) {
    isValid &&= false;
    let invalidInput = ""
    if(!apellidoInput.value){
      invalidInput = emptyInput;
    } else {
      invalidInput = "Formato de apellido incorrecto. Solo debe contener letras"
    }
    validationElemApellido.textContent = ""
    validationElemApellido.innerText = invalidInput
    validationBoxApellido.style.backgroundColor = "#ffdddd";
    validationBoxApellido.style.borderLeftColor = "#f44336";
    validationBoxApellido.hidden = false;
    apellidoInput.style.borderColor = "red";
  } else {
    validationBoxApellido.hidden = true;
    apellidoInput.style.borderColor = "";
  }

  if (!validadorMail(emailInput.value)) {
    isValid &&= false;
    let invalidInput = ""
    if(!emailInput.value){
      invalidInput = emptyInput;
    } else {
      invalidInput = "Formato de correo inválido. Ejemplo: usuario@dominio.com"
    }
    validationElemEmail.textContent = ""
    validationElemEmail.innerText = invalidInput
    validationBoxEmail.style.backgroundColor = "#ffdddd";
    validationBoxEmail.style.borderLeftColor = "#f44336";
    validationBoxEmail.hidden = false;
    emailInput.style.borderColor = "red";
  } else {
    validationBoxEmail.hidden = true;
    emailInput.style.borderColor = "";
  }

  if (!validadorTelefono(telefonoInput.value)) {
    let invalidInput = ""
    isValid &&= false;
    if(!telefonoInput.value){
      invalidInput = emptyInput;
    } else {
      invalidInput = "Formato de teléfono inválido. Ejemplo: 12345678"
    }
    validationElemTelefono.textContent = ""
    validationElemTelefono.innerText = invalidInput
    validationBoxTelefono.style.backgroundColor = "#ffdddd";
    validationBoxTelefono.style.borderLeftColor = "#f44336";
    validationBoxTelefono.hidden = false;
    telefonoInput.style.borderColor = "red";
  } else {
    validationBoxTelefono.hidden = true;
    telefonoInput.style.borderColor = "";
  }

  if (!validadorEstamento(estamentoSelect)) {
    isValid &&= false;
    let invalidInput = ""
    invalidInput = "Selecciona un estamento"
    validationElemEstamento.textContent = ""
    validationElemEstamento.innerText = invalidInput
    validationBoxEstamento.style.backgroundColor = "#ffdddd";
    validationBoxEstamento.style.borderLeftColor = "#f44336";
    validationBoxEstamento.hidden = false;
    estamentoSelect.style.borderColor = "red";
  } else {
    validationBoxEstamento.hidden = true;
    estamentoSelect.style.borderColor = "";
  }

  if (!validadorNombreAct(nombreActInput.value)) {
    isValid &&= false;
    let invalidInput = ""
    if(!nombreActInput.value){
      invalidInput = emptyInput;
    } else {
      invalidInput = "Formato inválido. Debe contener al menos una letra"
    }
    validationElemNombreAct.textContent = ""
    validationElemNombreAct.innerText = invalidInput
    validationBoxNombreAct.style.backgroundColor = "#ffdddd";
    validationBoxNombreAct.style.borderLeftColor = "#f44336";
    validationBoxNombreAct.hidden = false;
    nombreActInput.style.borderColor = "red";
  } else {
    validationBoxNombreAct.hidden = true;
    nombreActInput.style.borderColor = "";
  }

  if (!validadorDescripcion(descripcionInput.value)) {
    isValid &&= false;
    let invalidInput = ""
    if(!descripcionInput.value){
      invalidInput = emptyInput;
    } else {
      invalidInput = "Formato inválido. Debe contener al menos una letra"
    }
    validationElemDescripcion.textContent = ""
    validationElemDescripcion.innerText = invalidInput
    validationBoxDescripcion.style.backgroundColor = "#ffdddd";
    validationBoxDescripcion.style.borderLeftColor = "#f44336";
    validationBoxDescripcion.hidden = false;
    descripcionInput.style.borderColor = "red";
  } else {
    validationBoxDescripcion.hidden = true;
    descripcionInput.style.borderColor = "";
  }

  if (!validadorComuna(comunaSelect)) {
    isValid &&= false;
    let invalidInput = ""
    invalidInput = "Selecciona una comuna"
    validationElemComuna.textContent = ""
    validationElemComuna.innerText = invalidInput
    validationBoxComuna.style.backgroundColor = "#ffdddd";
    validationBoxComuna.style.borderLeftColor = "#f44336";
    validationBoxComuna.hidden = false;
    comunaSelect.style.borderColor = "red";
  } else {
    validationBoxComuna.hidden = true;
    comunaSelect.style.borderColor = "";
  }

  if (!validadorCategoria(categoriaSelect)) {
    isValid &&= false;
    let invalidInput = ""
    invalidInput = "Selecciona una categoria"
    validationElemCategoria.textContent = ""
    validationElemCategoria.innerText = invalidInput
    validationBoxCategoria.style.backgroundColor = "#ffdddd";
    validationBoxCategoria.style.borderLeftColor = "#f44336";
    validationBoxCategoria.hidden = false;
    categoriaSelect.style.borderColor = "red";
  } else {
    validationBoxCategoria.hidden = true;
    categoriaSelect.style.borderColor = "";
  }

  if (!validadorDias()) {
    isValid &&= false;
    let invalidInput = "Selecciona al menos un día";

    validationElemDias.textContent = "";
    validationElemDias.innerText = invalidInput;

    validationBoxDias.style.backgroundColor = "#ffdddd";
    validationBoxDias.style.borderLeftColor = "#f44336";
    validationBoxDias.hidden = false;

    diasCheckboxes.forEach(cb => cb.parentElement.style.color = "red");
  } else {
    validationBoxDias.hidden = true;
    diasCheckboxes.forEach(cb => cb.parentElement.style.color = "");
  }

  if (!validadorHora(horaInput1, horaInput2)) {
    isValid &&= false;
    let invalidInput = ""
    if (!horaInput1.value || !horaInput2.value) {
      invalidInput = emptyInput;
    } else {
      invalidInput = "La hora de inicio debe ser menor que la de fin";
    }
    validationElemHora.textContent = ""
    validationElemHora.innerText = invalidInput
    validationBoxHora.style.backgroundColor = "#ffdddd";
    validationBoxHora.style.borderLeftColor = "#f44336";
    validationBoxHora.hidden = false;
    horaInput1.style.borderColor = "red";
    horaInput2.style.borderColor = "red";
  } else {
    validationBoxHora.hidden = true;
    horaInput1.style.borderColor = "";
    horaInput2.style.borderColor = "";
  }

  if (!validadorFiles(filesInput.files)) {
    isValid &&= false;
    let invalidInput = ""
    if(filesInput.files.length === 0){
      invalidInput = "Es necesario compartir al menos una foto o video";
    } else {
      invalidInput = "Formato inválido, solo se permiten fotos y videos"
    }
    validationElemFiles.textContent = ""
    validationElemFiles.innerText = invalidInput
    validationBoxFiles.style.backgroundColor = "#ffdddd";
    validationBoxFiles.style.borderLeftColor = "#f44336";
    validationBoxFiles.hidden = false;
    filesInput.style.borderColor = "red";
  } else {
    validationBoxFiles.hidden = true;
    filesInput.style.borderColor = "";
  }

  
  if (!validadorLink(linkInput)) {
    isValid &&= false;
    let invalidInput = "Link inválido"
    validationElemLink.textContent = ""
    validationElemLink.innerText = invalidInput
    validationBoxLink.style.backgroundColor = "#ffdddd";
    validationBoxLink.style.borderLeftColor = "#f44336";
    validationBoxLink.hidden = false;
    linkInput.style.borderColor = "red";
  } else {
    validationBoxLink.hidden = true;
    linkInput.style.borderColor = "";
  }

  if (isValid) {
  // ocultar formulario
  const container = document.querySelector(".container");
  container.style.display = "none";

  // crear contenedor de mensaje
  const box = document.createElement("div");
  box.style.backgroundColor = "#ddffdd";
  box.style.borderLeft = "6px solid #4CAF50";
  box.style.padding = "20px";
  box.style.margin = "20px";
  box.style.borderRadius = "8px";
  box.style.textAlign = "center";

  // texto
  const mensaje = document.createElement("p");
  mensaje.innerText = "Actividad registrada con éxito";
  mensaje.style.fontSize = "18px";
  mensaje.style.marginBottom = "15px";

  // botón volver
  const boton = document.createElement("button");
  boton.innerText = "Volver al inicio";
  boton.style.padding = "10px 15px";
  boton.style.cursor = "pointer";

  boton.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/inicio.html"
  });

  // armar todo
  box.appendChild(mensaje);
  box.appendChild(boton);

  // agregar al body
  document.body.appendChild(box);
}

};

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validarForm);
