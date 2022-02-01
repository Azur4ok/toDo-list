import { createElement, addContent, prepareFinal } from "./helpers/createElement/index.js";
import { onCreateTags} from "./data/index.js";

const toDo = () => {

  const taskInput = document.getElementById("input-text"),
    taskAddButton = document.getElementById("add-task"),
    taskList = document.getElementById("task-list");

  const tasks = [];

  const createTask = (task) => {
    const tags = createElement(document, onCreateTags);

    const {
      li,
      checkbox,
      span,
      deleteBtn
    } = tags;

    const toAppend = [checkbox, span, deleteBtn];

    addContent(deleteBtn, {className: 'delete-button', textContent: 'delete'})

    checkbox.type = "checkbox";

    addContent(span, {className: 'task', textContent: task});

    tasks.push(task);

    prepareFinal(taskList, li, toAppend);

    deleteBtn.addEventListener("click", (e) => {
      deleteTask(e.target.parentNode.querySelector(".task").textContent);
      e.target.parentNode.remove();
    });
  };

  const loadTodos = (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
      createTask(tasks[i]);
    }
  };

  const getTodos = () => {
    if (localStorage.getItem("tasks")) {
      const taskList = JSON.parse(localStorage.getItem("tasks") || []);
      console.log(taskList);
      loadTodos(taskList);
    }
  };

  getTodos();

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (task) => {
    tasks.splice(task, 1);
    saveTasks();
  };

  const addNewTask = () => {
    const task = taskInput.value;
    if (!task) {
      alert("Enter a todo");
      return "";
    }
    createTask(task);
    saveTasks();
    taskInput.value = "";
  };

  taskAddButton.addEventListener("click", addNewTask);
};

toDo();
