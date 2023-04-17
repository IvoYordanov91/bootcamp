const responsables$$ = document.getElementById("responsable");
const formulario$$ = document.getElementById("formulario-tarea");
const listaTareas$$ = document.getElementById("lista-tareas");
let tareas = [];

class Tarea {
  constructor(title, status, deadline, priority, assigne_to, description) {
    this.title = title;
    this.status = status;
    this.deadline = deadline;
    this.priority = priority;
    this.assigne_to = assigne_to;
    this.description = description;
  }
  changeStatus(status) {
    this.status = status;
  }
  calcularRestante() {
    const today = new Date();
    const deadline = new Date(this.deadline);
    const difftime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(difftime / (1000 * 60 * 60 * 24));
    if (diffDays >= 0) {
      return `Faltan ${diffDays} días para acabar esta tarea`;
    }
    return `Se ha acabado el tiempo para esta tarea`;
  }
}

const mostrarTareas = () => {
  listaTareas$$.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const tareaHTML = `
        <li class=${tarea.priority.toLowerCase()}>
        <div class="tarea-header">
        <h2 class="tarea-title">${tarea.title}</h2>
        ${
          tarea.priority == "alta"
            ? '<i style="color: white !important" class="fass fa-exclamation-circle"></i>'
            : ""
        }
        </div>
        <p><strong>Fecha Limite:</strong> ${tarea.deadline}</p>
        <p><strong>Prioridad:</strong> ${tarea.priority}</p>
        <p><strong>Responsable:</strong> ${tarea.assigne_to}</p>
        <p><strong>Descripción:</strong> ${tarea.description}</p>
        <p>${tarea.calcularRestante()}</p>
        <select class="estado-select" onchange="cambiarEstado(${index}, this.value)">
        <option value="pendiente"${
          tarea.status === "pendiente" ? " selected" : ""
        }>Pendiente</option>
        <option value="en progreso"${
          tarea.status === "en progreso" ? " selected" : ""
        }>En Progreso</option>
        <option value="completada"${
          tarea.status === "completada" ? " selected" : ""
        }>Completada</option>
        </select>
        <button class="eliminar-btn" onclick="eliminarTarea(${index})">Eliminar</button>
        </li>
        `;
    listaTareas$$.innerHTML += tareaHTML;
  });
};

const eliminarTarea = (index) => {
    console.log(index);
    console.log(tareas);
    tareas.slice(index, 1);
    console.log(tareas);
    mostrarTareas();
    guardarTareas();
};

const initUsers = () => {
  fetch("usuarios.json")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((user) => {
        const option = document.createElement("option");
        option.text = user.nombre;
        option.value = user.nombre;
        responsables$$.appendChild(option);
      });
    })
    .catch((error) => console.log("Error al leer los usuarios:", error));
};

const agregarTarea = (
  titulo,
  estado,
  fecha,
  prioridad,
  responsable,
  descripcion
) => {
  const nuevaTarea = new Tarea(
    titulo,
    estado,
    fecha,
    prioridad,
    responsable,
    descripcion
  );
  tareas.push(nuevaTarea);
  guardarTareas();
};

const guardarTareas = () => {
  const tareasActualizadas = {
    tasks: tareas,
  };
  const datos = JSON.stringify(tareasActualizadas);
  localStorage.setItem("tareas", datos);
};

const init = () => {
  const tareasJson = localStorage.getItem("tareas");
  if (tareasJson != null) {
    tareas = JSON.parse(tareasJson).tasks;
    tareas = tareas.map(
      (tarea) =>
        new Tarea(
          tarea.title,
          tarea.status,
          tarea.deadline,
          tarea.priority,
          tarea.assigne_to,
          tarea.description
        )
    );
  }
  initUsers();
  mostrarTareas();
};
const cambiarEstado = (index, nuevoEstado) => {
  tareas[index].changeStatus(nuevoEstado);
  guardarTareas();
};

formulario$$.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const titulo = formulario$$.titulo.value;
  const estado = formulario$$.estado.value;
  const fecha = formulario$$.fecha.value;
  const prioridad = formulario$$.prioridad.value;
  const descripcion = formulario$$.descripcion.value;
  const responsable = formulario$$.responsable.value;
  agregarTarea(titulo, estado, fecha, prioridad, responsable, descripcion);
  mostrarTareas();
  formulario$$.reset();
});

init();
