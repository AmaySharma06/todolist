class Todo {
    title = "";
    desc = "";
    dueDate = "";

    constructor (title, desc, dueDate) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
    }

    set data(obj) {
        this.title = obj.title;
        this.desc = obj.desc;
        this.dueDate = obj.dueDate;
    }

    get data() {
        return {title: this.title, desc: this.desc, dueDate: this.dueDate};
    }
}

class Project {
    #todoList;

    constructor (name) {
        this.name = name;
        this.#todoList = [];
    }

    get todoList() {
        return this.#todoList;
    }

    get data() {
        return {name: this.name, todoList: this.#todoList.map((obj) => obj.data)};
    }

    set data(obj) {
        this.name = obj.name;
        this.#todoList = obj.todoList;
    }

    addTodo(todo) {
        this.#todoList.unshift(todo);
    }

    getTodo(index) {
        return this.#todoList[index];
    }

    updateTodo(index, todo) {
        this.#todoList[index] = todo;
    }

    deleteTodo(index) {
        this.#todoList.splice(index, 1);
    }

    #push(index, offset) {
        if ((index == 0 && offset < 0) || (index == this.#todoList.length-1 && offset > 0)) return;

        let temp = this.#todoList[index];
        this.#todoList[index] = this.#todoList[index+offset];
        this.#todoList[index+offset] = temp;
    }

    pushUp(index) {
        this.#push(index, -1);
    }

    pushDown(index) {
        this.#push(index, 1);
    }
}

export {Todo, Project}
