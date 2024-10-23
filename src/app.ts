import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.js";
import { render as renderCategories } from "./helpers/render-categories.js";
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksConteinerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");
let selectCategory: Category;

const categories: Category[] = [Category.GENERAL, Category.LIFE, Category.WORK];
const tasks: Task[] = [
  { title: "Wyrzucić śmieci", done: true, categories: Category.GENERAL },
  { title: "Zostaś programistą", done: false, categories: Category.LIFE },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    title: taskNameInputElement.value,
    done: false,
    categories: selectCategory,
  });
  renderTasks(tasks, tasksConteinerElement);
});
renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);
renderTasks(tasks, tasksConteinerElement);
