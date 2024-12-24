const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList');

document.addEventListener("DOMContentLoaded", loadTasks)

addTaskBtn.addEventListener('click', ()  => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        addTaskToList(taskText);
        saveTaskToLocalStorage(taskText);
        taskInput.value = "";
    } else {
        alert("Please enter something")
    }
})

function addTaskToList(taskText) {
    const listItem = document.createElement('li');
    const text = document.createElement('span')
    text.innerText = taskText

    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'DONE'
    doneBtn.addEventListener('click', function () {
    listItem.style.textDecoration = 'line-through';
});
    const deleteBtn = document.createElement(`button`);
    deleteBtn.innerText = 'Delete';  
    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(listItem)
    });
    listItem.appendChild(text);
    listItem.appendChild(doneBtn);
    listItem.appendChild(deleteBtn)
    taskList.appendChild(listItem);
}


function saveTaskToLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => { addTaskToList(taskText);});
}
