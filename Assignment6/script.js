const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");



btn.addEventListener('click', function() {

    let todo = input.value;

    //create todos
    const li = document.createElement("li");

    //add todos
    if (todo != "") {
        li.innerText = todo;
        ul.appendChild(li);
    }

    //delete todos
    li.onclick = function(event) {
        event.target.remove();

    }

    //set empty in input
    input.value = "";
});