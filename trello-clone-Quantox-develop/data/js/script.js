let taskValue = document.getElementById("add-task");
let columns = document.getElementById("columns");
let hasCollision = false;
const dropzones = document.querySelectorAll(".dropzone");

document.getElementById("add-task").addEventListener("click", function () {
  console.log("added");

  let taskValue = document.getElementById("task-value");
  // if (!taskValue) {
  //   console.log(!taskValue);
  //   document.querySelector(".d-none").classList.remove(".d-none");
  // }

  console.log(addTask(taskValue.value));
  // #point 2 : Vrednost se brise posle novog unosa.
  taskValue.value = '';
  saveResults();
});


window.onload = () =>
{
  const node = document.getElementsByClassName('tasks');

  const d = localStorage.getItem('task');

  console.log(d);

  // node[0].appendChild(d);
}



const saveResults = () =>
{
  localStorage.clear();

  const node = document.getElementsByClassName('fill');
  console.log(node[0]);

  localStorage.setItem('task' , node[0]);
}
 

const addTask = (taskValue) => {
  let task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("fill");
  task.draggable = true;
 
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);

  let taskContent = document.createElement("div");
  taskContent.classList.add("task-content");
  taskContent.classList.add("task-color");

  taskContent.textContent = taskValue;

  let trash = document.createElement("button");
  trash.classList.add("trash");
  trash.textContent = "X";
  trash.addEventListener("click", removeTask);

  task.appendChild(taskContent);
  task.appendChild(trash);

  let tasks = document.getElementById("tasks-aded");
  tasks.prepend(task);
  
};

const removeTask = (event) => {
  let tasks = event.target.parentNode;
  console.log(tasks);
  tasks.remove();
};

let task;

const dragStart = (event) => {
  event.target.className += " hold";
  task = event.target;
  setTimeout(() => (event.target.className = "d-none"), 0);
  event.target.className.toggle;
  console.log(task);
};

const dragEnd = (event) => {
  event.target.className = "task fill";
};

const dragEnter = (event) => {
  event.preventDefault();
};

let closestIndex = null;
let nodes = [];

const dragOver = (event) => {
  event.preventDefault();

};

const dragLeave = (event) => {
  event.preventDefault();
};

const dragDrop = (event) => {
  event.preventDefault();


  const len = event.target.classList.length;
  let drop = true;


  for(let i = 0; i<len; i++)
  {
    if(event.target.classList[i] === 'task-content' || event.target.classList[i] === 'title-bar')
    {
      drop = false;
    }
  }

  if(drop) 
  {
    event.target.appendChild(task);
  }
};

for (const dropzone of dropzones) {
  dropzone.addEventListener("dragEnter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", dragDrop);
}
