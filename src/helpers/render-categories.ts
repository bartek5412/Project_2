import { Category } from "../types/types.js";

const handleCatergoryChange = (category: Category) => {
  if (category === Category.GENERAL) {
    console.log("Zmiana");
  } else if (category === Category.LIFE) {
    alert("Test");
  }
};
export const render = (
  categories: Category[],
  categoriesContainerElement: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      inputChangeCallback(category);
      handleCatergoryChange(category);
    });

    const labelElement: HTMLElement = document.createElement("label");
    labelElement.setAttribute("for", `category-1${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);
    categoriesContainerElement.appendChild(categoryElement);
  });
};
