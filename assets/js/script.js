var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//creates a function that creates a new task, styles the task, adds text, adds this element to task list
var createTaskHandler = function (event){

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};
//when button is clicked, it calls up on the function above!
formEl.addEventListener("submit", createTaskHandler);