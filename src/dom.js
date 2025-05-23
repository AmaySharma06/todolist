import {Todo, Project} from "./classes.js"
import {updateStorage, loadStorage} from "./storage.js";

class Base {

    constructor (objectListObject, object) {
        this.objectList = [];
        this.objectListObject = objectListObject;
        this.object = object;
    }

    createObjectListElement(object) {
        const objectListElement = this.createBaseObjectListElement(object);
        
        const name = objectListElement.querySelector("input");
        name.addEventListener("blur", (event) => this.renameObject(event));
        name.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.renameObject(event);
                name.blur();
            }
        });


        return objectListElement;
    }

    showObject(object) {
        if (this.object == Project) {
            this.objectList = loadStorage();
        }
        const objectListElement = this.createObjectListElement(object);
        this.objectListObject.appendChild(objectListElement);
        
        return objectListElement;
    }

    updateObjectDisplay() {
        if (this.object == Project) {
            this.objectList = loadStorage();
        }
        this.objectListObject.innerHTML = "";
        for (let i=0;i<this.objectList.length;i++) {
            const element = this.showObject(this.objectList[i]);
            element.setAttribute("index", i);
        }
    }

    newObject() {
        if (this.object == Project) {
            this.objectList = loadStorage();
        }
        this.objectList.push(new this.object("Untitled"));
        if (this.object == Project) updateStorage(this.objectList);
        else {
            updateStorage(this.projectListReference);
        }
        this.updateObjectDisplay();
    }

    renameObject(event) {
        if (this.object == Project) {
            this.objectList = loadStorage();
        }
        const li = event.currentTarget.closest("li");
        const index = Number(li.getAttribute("index"));
        if (this.object == Todo) {
            this.objectList[index].title = li.querySelector("input[type='text']") ? li.querySelector("input[type='text']").value : li.querySelector("input").value;
            this.objectList[index].desc = li.querySelector("textarea").value;
            this.objectList[index].dueDate = li.querySelector("input[type='date']").value;
        }
        else {
            this.objectList[index].name = event.currentTarget.value;
        }
        if (this.object == Project) updateStorage(this.objectList);
        else {
            updateStorage(this.projectListReference);
        }
        this.updateObjectDisplay();
        if (this.object == Project) {
            const li = event.currentTarget.closest("li");
            const customEvent = {
                currentTarget: li
            };
            this.showTodos(customEvent);
        }
    }

    removeObject(event) {
        if (this.object == Project) {
            this.objectList = loadStorage();
        }
        const li = event.currentTarget.closest("li");
        const index = Number(li.getAttribute("index"));
        this.objectList.splice(index, 1);
        if (this.object == Project) updateStorage(this.objectList);
        else {
            updateStorage(this.projectListReference);
        }
        this.updateObjectDisplay();
    }
}

class TodoList extends Base {

    constructor (todoListObject, Todo, parentProject, projectListReference) {
        super(todoListObject, Todo);
        this.parentProject = parentProject;
        this.objectList = parentProject.todoList;
        this.projectListReference = projectListReference;
    }

    createBaseObjectListElement(object) {
        const objectListElement = document.createElement("li");
        const name = document.createElement("input");
        name.value = object.title;

        const desc = document.createElement("textarea");
        desc.value = object.desc;
        desc.addEventListener("blur", (event) => this.renameObject(event));

        // Date input
        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.value = object.dueDate || "";
        dateInput.addEventListener("change", (event) => this.renameObject(event));

        const buttons = document.createElement("div");

        const upButton = document.createElement("button");
        upButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        upButton.addEventListener("click", (event) => {
            const li = event.currentTarget.closest("li");
            const index = Number(li.getAttribute("index"));
            this.parentProject.pushUp(index);
            this.updateObjectDisplay();

        })

        const downButton = document.createElement("button");
        downButton.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
        downButton.addEventListener("click", (event) => {
            const li = event.currentTarget.closest("li");
            const index = Number(li.getAttribute("index"));
            this.parentProject.pushDown(index);
            this.updateObjectDisplay();
        })

        const delButton = document.createElement("button");
        delButton.innerHTML = '<i class="fas fa-check"></i>';
        delButton.addEventListener("click", (event) => this.removeObject(event));
    

        buttons.appendChild(upButton);
        buttons.appendChild(downButton);
        buttons.appendChild(delButton);

        const topContainer = document.createElement("div");
        topContainer.appendChild(name);
        topContainer.appendChild(buttons);

        objectListElement.appendChild(topContainer);
        objectListElement.appendChild(desc);
        buttons.appendChild(dateInput);

        return objectListElement;
    }

    newObject() {
        this.objectList = this.parentProject.todoList;
        const newTodo = new Todo("New Task", "", "");
        this.objectList.push(newTodo);
        updateStorage(this.projectListReference);
        this.updateObjectDisplay();
    }
}


class ProjectList extends Base {

    constructor(projectListObject, todoListObject,todoListHeading, object) {
        super(projectListObject, object);
        this.todoListObject = todoListObject;
        this.todoListHeading = todoListHeading;
        this.currentProject = -1;
    }

    showTodos(event) {
        this.objectList = (this.object == Project) ? loadStorage() : loadStorage()[this.projectListReference.indexOf(this.parentProject)];
        try {
            document.querySelector("#new-todo-button").remove();
        }
        catch {

        }
        try {
            // If the project list is empty, would prevent bugging out
            this.currentProject = Number(event.currentTarget.getAttribute("index"));
            const project = this.objectList[this.currentProject];
            this.todoListHeading.innerText = project.name;
            const todoList = new TodoList(this.todoListObject, Todo, project, this.objectList);

            if (document.querySelector("#new-todo-button") === null) {
                const newTodoButton = document.createElement("button");
                newTodoButton.innerHTML = '<span class="material-symbols-outlined">add_task</span> New Task'; 
                newTodoButton.id = "new-todo-button";
                newTodoButton.classList.add("add-btn");
                document.querySelector(".todolist-container").insertBefore(newTodoButton, document.querySelector(".todolist-list"));
                newTodoButton.addEventListener("click", () => todoList.newObject());
            }
            
            todoList.updateObjectDisplay();
        }
        catch {
            document.querySelector(".todolist-heading").innerHTML = "";
            document.querySelector(".todolist-list").innerHTML = "";
        }
    }

    createBaseObjectListElement(object) {
        const projectListElement = document.createElement("li");
        const name = document.createElement("input");
        name.value = object.name || "";
        const delButton = document.createElement("button");
        delButton.innerHTML = '<i class="fas fa-trash"></i>';
        delButton.addEventListener("click", (event) => {
            try {
                if (event.currentTarget.closest("li").index == this.currentProject) this.currentProject--;
                this.removeObject(event)
            }
            catch {
                this.currentProject--;
            }
        }
        );

        projectListElement.appendChild(name);
        projectListElement.appendChild(delButton);

        projectListElement.addEventListener("click", (event) => this.showTodos(event));

        return projectListElement;
    }
}

export {ProjectList}
