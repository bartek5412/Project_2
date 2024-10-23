import { Category } from "../types/types.js";
const handleCatergoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log("Zmiana");
    }
    else if (category === Category.LIFE) {
        alert("Test");
    }
};
export const render = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("tr");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.classList.add("li-input");
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCatergoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
