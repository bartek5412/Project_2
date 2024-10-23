import { Task } from "../types/types";
export const render = (tasks: Task[], tasksConteinerElement: HTMLElement) => {
  tasksConteinerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.categories) {
      taskElement.classList.add(task.categories);
    }
    const id: string = `task-${index}`;
    const LabelElement: HTMLLabelElement = document.createElement("label");
    LabelElement.innerText = task.title;
    LabelElement.setAttribute("for", id);

    const chechboxElement: HTMLInputElement = document.createElement("input");
    chechboxElement.type = "checkbox";
    chechboxElement.name = task.title;
    chechboxElement.id = id;
    chechboxElement.checked = task.done;
    chechboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(LabelElement);
    taskElement.appendChild(chechboxElement);
    tasksConteinerElement.appendChild(taskElement);
  });
};
export default render;
