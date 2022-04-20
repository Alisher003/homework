const elForm = document.querySelector(".form")
const elInput = document.querySelector(".input");
const elList = document.querySelector(".list")

const products = [];


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    let inputValue = elInput.value;

    const product = {
        name: inputValue,
        length: products.length,
    };

    products.push(product);
    elForm.reset()
    elList.innerHTML = null;

    for (let item of products) {
        const newItem = document.createElement("li")
        newItem.textContent = item.name;
        elList.appendChild(newItem);
    }

})