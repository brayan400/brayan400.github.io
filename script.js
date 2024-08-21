document.addEventListener("DOMContentLoaded", () => {

    const taskseguridad = document.getElementById("taskseguridad");
    let selectedTask = null;

    //se adiciona event listener a cada boton
    document.getElementById("addTask").addEventListener("click", () => {
        const textoTarea = prompt("ingrese el nombre de la tarea");
        if (textoTarea) {
            //crear un nuevo elemento HTML de tipo "li":
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            taskseguridad.appendChild(nuevaTarea);

            selectedTaskHander(nuevaTarea);
        }
    });
    document.getElementById("deleteTask").addEventListener("click", () => {
        if (selectedTask) {
            taskseguridad.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("no ha selecionado ningura tarea para eliminar");
        }
    });
    document.getElementById("editTask").addEventListener("click", () => {

        if (selectedTask) {
            const nuevoTexto = prompt("modificar la tarea", selectedTask.textContent);
            if (nuevoTexto) {
                selectedTask.textContent = nuevoTexto;
            }
        } else {
            alert("selecione una tarea para modificar");
        }
    });

    function selectedTaskHander(task) {
        task.addEventListener("click", () => {
          selectedTask = task;
          task.classList.add("selected");
        });
      }
      document.getElementById("info").addEventListener("click", () => {
        
      });
});