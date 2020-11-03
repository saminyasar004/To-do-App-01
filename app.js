// selection
const input = document.querySelector(".input");
const btnSubmit = document.querySelector(".btnSubmit");
const todoList = document.querySelector(".todo-list");
const todoDiv = document.querySelector(".todoDiv");
// eventlistener
btnSubmit.addEventListener("click", addTodo);
todoList.addEventListener("click", todofunction);
// functions

function addTodo(e) {
  e.preventDefault();
  let inputValue = input.value;
  if (inputValue == "") {
    alert("The input field is not to be empty.");
  } else {
    // create elelment
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");
    let li = document.createElement("li");
    let btnCheck = document.createElement("button");
    let btnTrash = document.createElement("button");
    btnCheck.innerHTML = "<i class='fa fa-check'></i>";
    btnTrash.innerHTML = "<i class='fa fa-trash'></i>";
    btnCheck.classList.add("btn");
    btnCheck.classList.add("btnCheck");
    btnTrash.classList.add("btn");
    btnTrash.classList.add("btnTrash");
    // let's append all divs
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(li);
    todoDiv.appendChild(btnCheck);
    todoDiv.appendChild(btnTrash);
    li.innerText = inputValue;
    input.value = "";
  }
}

function todofunction(e) {
  item = e.target;
  if (item.classList[1] === "fa-trash" || item.classList[1] === "btnTrash") {
    let parentDiv = item.parentElement;
    parentDiv.classList.add("removedAnim");
    parentDiv.addEventListener("transitionend", () => {
      parentDiv.remove();
    });
  } else if (
    item.classList[1] === "fa-check" ||
    item.classList[1] === "btnCheck"
  ) {
    let parentDiv = item.parentElement;
    parentDiv.classList.toggle("completedAnim");
  }
}
