import {ProjectList} from "./dom.js"
import {Project, Todo} from "./classes.js"
import "./styles.css"

const newProjectButton = document.querySelector("#new-project-button");
const projectListObject = document.querySelector("#project-list"); 
const todoListObject = document.querySelector(".todolist-list");
const todoListHeading = document.querySelector(".todolist-heading");

const projectList = new ProjectList(projectListObject, todoListObject, todoListHeading, Project);

newProjectButton.addEventListener("click", () => projectList.newObject());
