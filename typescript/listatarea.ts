//Crear una lista de tareas
//1. Funcion para agregar una nueva tarea
//2. Funcion para marcar las tareas
//3. Funcion para listar las tareas
//4. Funcion para eliminar tareas
//5. Funcion para filtrar por estado(completadas/pendientes)

//La plantilla de cada tarea
interface Task {
    id: number;
    tittle: string;
    description: string;
    complete: boolean;
    date: Date;
}

//Creamos un array vacia para almacenar las tareas
let task: Task[] = [];

function addtask(tittle: string, description: string): void {
    const newTask: Task = {
        id: task.length + 1,
        tittle,
        description,
        complete: false,
        date: new Date()
    };
    task.push(newTask);
}

function markTask(id: number): void {
    const foundTask = task.find(t => t.id === id)
    if(foundTask) {
        foundTask.complete = true;
    }
}

function deleteTask(id: number): void {
    task = task.filter(t => t.id !== id);
}

function listerTask(): void {
    console.table(task);
}

function filterTask(complete: boolean): Task[] {
    return task.filter(t => t.complete === complete);
}

// 4. Ejemplo de uso
addtask("Estudiar TypeScript", "Completar ejercicios básicos");
addtask("Hacer ejercicio", "30 minutos de cardio");
listerTask();
markTask(1);
console.log("\nTareas completadas:");
console.table(filterTask(true));
