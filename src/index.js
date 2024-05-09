import displayProjects from './displayProjects';
import displayProject from './displayProject';
import Project from "./Project";
import { projects } from './Project';
import './index.css';
import { setStorage, getStorage } from './localStorage';

let currentProject = undefined;
let currentToDo = undefined;

console.log(getStorage('projects'));

if (getStorage('projects') ) {
  projects = getStorage('projects');
}else {
  setStorage('projects', projects);
}


displayProjects(projects);

const closeModal = document.querySelector("dialog .close");
const closeToDoModal = document.querySelector("dialog .todo-close");
const closeEditModal = document.querySelector("dialog .edit-close");
const addProjectBtn = document.querySelector("dialog button.add-project");
const addToDoBtn = document.querySelector("dialog button.add-todo");


const content = document.querySelector('#content');
const projectDialog = document.querySelector(".add-project-modal");
const todoDialog = document.querySelector(".add-todo-modal");
const ToDoForm = document.querySelector('.todo-form');
const editToDoDialog = document.querySelector('.edit-todo-modal');

const editToDoBtn = document.querySelector("dialog button.edit-todo");
const editToDo = document.querySelector("#editname");
const editToDoDesc = document.querySelector('#edittododesc');
const editToDoPriority = document.querySelector('#editpriority');
const editToDoDue = document.querySelector('#edittodoDueDate');
const editToDoNotes = document.querySelector('#editnotes');
const editToDoForm = document.querySelector('.edit-todo-form')

const getToDoName = document.querySelector('#name');
const getToDoDesc = document.querySelector('#tododesc');
const getToDoPriority = document.querySelector('#priority1');
const getToDoDue = document.querySelector('#todoDueDate');
const getToDoNotes = document.querySelector('#notes');

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.close();
  });

  closeToDoModal.addEventListener("click", (e) => {
    e.preventDefault();
    todoDialog.close();
  });

  closeEditModal.addEventListener("click", (e) => {
    e.preventDefault();
    editToDoDialog.close();
  });

addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let project = new Project;
  project.addProject();
  displayProjects(projects);
  setStorage('projects', projects);
  projectDialog.close();
});

addToDoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projects[currentProject].toDonts.push({
    id: projects[currentProject].toDonts.length, 
    name: getToDoName.value,
    description: getToDoDesc.value,
    priority: getToDoPriority.value,
    dueDate: getToDoDue.value,
    notes: getToDoNotes.value
})
displayProject(projects[currentProject]);
setStorage('projects', projects);
todoDialog.close();
ToDoForm.reset();
});

editToDoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(projects[currentProject].toDonts[currentToDo]);
  projects[currentProject].toDonts[currentToDo] = {
    id: currentToDo,
    name: editToDo.value,
    description: editToDoDesc.value,
    priority: editToDoPriority.value,
    dueDate: editToDoDue.value,
    notes: editToDoNotes.value,
  };
  displayProject(projects[currentProject]);
  setStorage('projects', projects);
  editToDoDialog.close();
  editToDoForm.reset();
})

content.addEventListener('click', (e) => {
  
  if (e.target.classList.contains('remove-btn')) {
    
    projects.splice(projects.findIndex(item => item.id === +e.target.id), 1);
    setStorage('projects', projects);
    
    displayProjects(projects); 
  }

  if (e.target.classList.contains('view-btn')) {

    displayProject(projects[projects.findIndex(item => item.id === +e.target.id)]);
    currentProject = projects.findIndex(item => item.id === +e.target.id);
    console.log(currentProject);

  }

  if (e.target.classList.contains('back-btn')){

    displayProjects(projects);

  }

  if (e.target.classList.contains('add-project')) {
    e.preventDefault();
    projectDialog.showModal();
  }

  if (e.target.classList.contains('add-todo')){
    e.preventDefault();
    todoDialog.showModal();
  }

  if (e.target.classList.contains('complete-btn')){
    e.preventDefault();
    e.target.closest('div.todo-card').classList.toggle('complete-card');
    e.target.textContent = e.target.textContent === 'Complete' ? 'Not Complete' : 'Complete';
  }

  if (e.target.classList.contains('edit-btn')){
    e.preventDefault();
    currentToDo = e.target.id;
    editToDoDialog.showModal();

    let Name = document.querySelector('.todo-card h3');
    let Due = document.querySelector('.todo-card>p');
    let Desc = document.querySelector('.todo-card p:nth-child(3)');
    let Notes = document.querySelector('.todo-card p:nth-child(4)');

    editToDo.value = Name.textContent;
    editToDoDue.value = Due.textContent;
    editToDoDesc.value = Desc.textContent;
    editToDoNotes.value = Notes.textContent;

  }

})

