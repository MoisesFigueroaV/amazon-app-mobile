//Crear una lista de tareas
//1. Funcion para agregar una nueva tarea
//2. Funcion para marcar las tareas
//3. Funcion para listar las tareas
//4. Funcion para eliminar tareas
//5. Funcion para filtrar por estado(completadas/pendientes)
//Creamos un array vacia para almacenar las tareas
var task = [];
function addtask(tittle, description) {
    var newTask = {
        id: task.length + 1,
        tittle: tittle,
        description: description,
        complete: false,
        date: new Date()
    };
    task.push(newTask);
}
function markTask(id) {
    var foundTask = task.find(function (t) { return t.id === id; });
    if (foundTask) {
        foundTask.complete = true;
    }
}
function deleteTask(id) {
    task = task.filter(function (t) { return t.id !== id; });
}
function listerTask() {
    console.table(task);
}
function filterTask(complete) {
    return task.filter(function (t) { return t.complete === complete; });
}
// 4. Ejemplo de uso
addtask("Estudiar TypeScript", "Completar ejercicios básicos");
addtask("Hacer ejercicio", "30 minutos de cardio");
listerTask();
markTask(1);
console.log("\nTareas completadas:");
console.table(filterTask(true));
