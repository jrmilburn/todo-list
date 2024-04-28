
const content = document.querySelector('#content');

function displayToDo(todo) {
    const ToDoCard = document.createElement('div');
    ToDoCard.classList.add('to-do');

    const Title = document.createElement('h2');
    const DueDate = document.createElement('h3');
    const Description = document.createElement('p');
    const Priority = document.createElement('p')
    const Notes = document.createElement('p');

    Title.textContent = todo.title;
    DueDate.textContent = "Due: " + todo.dueDate;
    Description.textContent = "Description: " + todo.description;
    Priority.textContent = "Priority: " + todo.priority;
    Notes.textContent = "Notes: " + todo.notes;

    ToDoCard.appendChild(Title);
    ToDoCard.appendChild(DueDate);
    ToDoCard.appendChild(Description);
    ToDoCard.appendChild(Priority);
    ToDoCard.appendChild(Notes);
    content.appendChild(ToDoCard);
}


export default displayToDo;