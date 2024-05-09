const content = document.querySelector('#content');

function createToDoDiv(ToDo) {

    const ToDoCard = document.createElement('div');
    const ToDoTitle = document.createElement('h3');
    const ToDoDue = document.createElement('p');
    const ToDoDesc = document.createElement('p');
    const ToDoNotes = document.createElement('p');
    const editBtn = document.createElement('button');
    const completeBtn = document.createElement('button');

    ToDoTitle.textContent = `${ToDo.name}`;
    ToDoDue.textContent = `${ToDo.dueDate}`;
    ToDoDesc.textContent = `${ToDo.description}`;
    ToDoNotes.textContent = `${ToDo.notes}`;
    editBtn.textContent = 'Edit';
    completeBtn.textContent = 'Complete';

    editBtn.classList.add('edit-btn');
    completeBtn.classList.add('complete-btn');

    editBtn.setAttribute('id', `${ToDo.id}`);
    completeBtn.setAttribute('id', `${ToDo.id}`);

    ToDoCard.classList.add('todo-card');

    if (ToDo.priority === 'high') {
        ToDoCard.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    } else if (ToDo.priority === 'low') {
        ToDoCard.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
    }

    ToDoCard.appendChild(ToDoTitle);
    ToDoCard.appendChild(ToDoDue);
    ToDoCard.appendChild(ToDoDesc);
    ToDoCard.appendChild(ToDoNotes);
    ToDoCard.appendChild(editBtn);
    ToDoCard.appendChild(completeBtn);

    content.appendChild(ToDoCard);

}

function extendProjectDiv(project) {

    const ProjectCard = document.createElement('div');
    const ProjectTitle = document.createElement('h3');
    const ProjectDue = document.createElement('p');
    const BackToProjects = document.createElement('button');
    const ToDoHeading = document.createElement ('h3');

    ProjectTitle.textContent = `Project Name: ${project.title}`;
    ProjectDue.textContent = `Project Due Date: ${project.dueDate}`;
    ToDoHeading.textContent = 'To-Do List';
    
    BackToProjects.textContent = 'Back';

    BackToProjects.classList.add('back-btn');
    ToDoHeading.classList.add('project-heading');

    ProjectCard.appendChild(BackToProjects);
    ProjectCard.appendChild(ProjectTitle);
    ProjectCard.appendChild(ProjectDue);
       
    content.appendChild(ProjectCard);
    content.appendChild(ToDoHeading);

    const ToDos = project.toDonts;

    ToDos.forEach(ToDo => {
        createToDoDiv(ToDo);
        console.log(project.toDonts);
    });

}

function displayProject(project) {

    content.textContent = '';

    extendProjectDiv(project);

    const addToDoDiv = document.createElement('div');
    addToDoDiv.classList.add('add-todo-btn', 'projects-card');
    const addToDoButton = document.createElement('button');
    addToDoButton.classList.add('add-todo');
    addToDoButton.textContent = 'Add +';
    addToDoDiv.appendChild(addToDoButton);
    content.appendChild(addToDoDiv);

}

export default displayProject;