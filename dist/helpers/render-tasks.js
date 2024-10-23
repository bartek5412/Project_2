export const render = (tasks, tasksConteinerElement) => {
    tasksConteinerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.categories) {
            taskElement.classList.add(task.categories);
        }
        const id = `task-${index}`;
        const LabelElement = document.createElement("label");
        LabelElement.innerText = task.title;
        LabelElement.setAttribute("for", id);
        const chechboxElement = document.createElement("input");
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
