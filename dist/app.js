import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.js";
import { render as renderCategories } from "./helpers/render-categories.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksConteinerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectCategory;
const categories = [Category.GENERAL, Category.LIFE, Category.WORK];
const tasks = [
    { title: "Wyrzucić śmieci", done: true, categories: Category.GENERAL },
    { title: "Zostaś programistą", done: false, categories: Category.LIFE },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        title: taskNameInputElement.value,
        done: false,
        categories: selectCategory,
    });
    renderTasks(tasks, tasksConteinerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksConteinerElement);
