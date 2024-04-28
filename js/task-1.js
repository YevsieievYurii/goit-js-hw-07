const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ` + categoriesItem.length);


for (let i = 0; i < categoriesItem.length; i++) {
    const title = categoriesItem[i].querySelector("h2").textContent;
    const allItems = categoriesItem[i].querySelectorAll("li");
    console.log(`category: ` +title);
    console.log(`Elements: ` +allItems.length);
}
