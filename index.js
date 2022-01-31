const toDo = () => {
  const taskInput = document.getElementById("input-text"),
    taskAddButton = document.getElementById("add-task"),
    taskList = document.getElementById("task-list");

  const tasks = [];

  const createTask = (task) => {
    const li = document.createElement("li"),
      checkbox = document.createElement("input"),
      span = document.createElement("span"),
      deleteBtn = document.createElement("button");

    deleteBtn.classList.add("delete-button");
    deleteBtn.textContent = "delete";

    checkbox.type = "checkbox";

    span.textContent = task;
    span.classList.add("task");
    tasks.push(task);

    taskList.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
      deleteTask(e.target.parentNode.querySelector(".task").textContent);

      e.target.parentNode.remove();
    });
  };

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
