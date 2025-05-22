import {Todo, Project} from "./classes.js"
// TODO: Load and Store functions for Local Storage, to be used for both lists

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
        const objectListElement = this.createObjectListElement(object);
        this.objectListObject.appendChild(objectListElement);
        
        return objectListElement;
    }

    updateObjectDisplay() {
        this.objectListObject.innerHTML = "";
        for (let i=0;i<this.objectList.length;i++) {
            const element = this.showObject(this.objectList[i]);
            element.setAttribute("index", i);
        }
    }

    newObject() {
        this.objectList.push(new this.object("Untitled"));
        this.updateObjectDisplay();
    }

    renameObject(event) {
        const li = event.currentTarget.closest("li");
        const index = Number(li.getAttribute("index"));

        if (this.object == Todo) {
            this.objectList[index].data = {title: li.querySelector("input").value, desc: li.querySelector("textarea").value, dueDate: ""};
        }
        else {
            this.objectList[index].name = event.currentTarget.value;
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
        const li = event.currentTarget.closest("li");
        const index = Number(li.getAttribute("index"));
        this.objectList.splice(index, 1);
        this.updateObjectDisplay();
    }
}


class TodoList extends Base {

    constructor (todoListObject, Todo, parentProject) {
        super(todoListObject, Todo);
        this.parentProject = parentProject;
        this.objectList = parentProject.todoList;
    }

    createBaseObjectListElement(object) {
        const objectListElement = document.createElement("li");
        const name = document.createElement("input");
        name.value = object.title;

        const desc = document.createElement("textarea");
        desc.value = object.desc;
        desc.addEventListener("blur", (event) => this.renameObject(event));
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

        return objectListElement;
    }

    newObject() {
        const newTodo = new Todo("New Task", "", "");
        this.objectList.push(newTodo);
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
            const todoList = new TodoList(this.todoListObject, Todo, project);

            if (document.querySelector("#new-todo-button") === null) {
                const newTodoButton = document.createElement("button");
                newTodoButton.innerHTML = '<i class="fa fa-plus"></i> New Task'; 
                newTodoButton.id = "new-todo-button";
                document.querySelector(".todolist-container").insertBefore(newTodoButton, document.querySelector(".todolist-container").firstChild);
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
