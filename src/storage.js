import {Todo, Project} from "./classes.js"

function updateStorage (obj) {
    localStorage.setItem("data", JSON.stringify(obj.map((o)=>o.data )));
    // console.log(JSON.stringify(obj.map((o)=>o.data )));
}

function loadStorage () {
    let data = localStorage.getItem("data");
    if (data == undefined) return [];
    data = JSON.parse(data);

    const returnData = [];

    for (let project of data) {
        const newProject = new Project(project.name);
        for (let todo of project.todoList) {
            newProject.addTodo(new Todo(todo.title, todo.desc, todo.dueDate));
        }

        returnData.push(newProject);
    }

    console.log(returnData);

    return returnData;
}


export {updateStorage, loadStorage}
