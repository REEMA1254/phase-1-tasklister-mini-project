document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();  

    const taskDescription = taskInput.value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    })

  
    taskList.appendChild(taskItem);

    
    taskInput.value = "";
  });
});
