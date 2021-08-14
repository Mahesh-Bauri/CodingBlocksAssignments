const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");



function add() {

    const divBtn = document.createElement("div");
    divBtn.classList.add("btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("del");

    const updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";
    updateBtn.classList.add("update");

    divBtn.appendChild(deleteBtn);
    divBtn.appendChild(updateBtn);

    const divItem = document.createElement("div");
    divItem.classList.add("item");
    const para = document.createElement("p");
    para.classList.add("paragraph")

    divItem.appendChild(para);
    divItem.appendChild(divBtn);


    const li = document.createElement("li");


    li.append(divItem);
    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
    })


    let str = input.value;
    para.innerText = str;

    if (str != "") {
        ul.append(li);
    }

    input.value = "";
}