const content = document.querySelector('#content');
const Navbar = document.querySelector('.nav-projects');

function createProjectDiv(project) {
    if(project.length === 0){
        return;
    }

    const ProjectsCard = document.createElement('div');
    const ProjectsTitle = document.createElement('h3');
    const ProjectsDue = document.createElement('p');
    const btnsDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const RemoveBtn = document.createElement('button');
    const ViewBtn = document.createElement('button');
    const NavProject = document.createElement('button');

    ProjectsCard.classList.add('projects-card');
    btnsDiv.classList.add('btns-div');
    textDiv.classList.add('text-div');
    ViewBtn.classList.add('view-btn');
    RemoveBtn.classList.add('remove-btn');
    RemoveBtn.setAttribute('id', `${project.id}`);
    ViewBtn.setAttribute('id', `${project.id}`);

    ProjectsTitle.textContent = `${project.title}`;
    ProjectsDue.textContent = `${project.dueDate}`;
    RemoveBtn.textContent = 'Remove';
    ViewBtn.textContent = 'View';
    NavProject.textContent = `# ${project.title}`;

    textDiv.appendChild(ProjectsTitle);
    textDiv.appendChild(ProjectsDue);
    btnsDiv.appendChild(RemoveBtn);
    btnsDiv.appendChild(ViewBtn);
    
    ProjectsCard.appendChild(textDiv);
    ProjectsCard.appendChild(btnsDiv);

    content.appendChild(ProjectsCard);
    Navbar.appendChild(NavProject);
}

function displayProjects(projects) {
    content.textContent = '';
    Navbar.textContent = '';

    const ProjectsHeader = document.createElement('h3');
    ProjectsHeader.classList.add('projects-header');
    ProjectsHeader.textContent = "My Projects";
    content.appendChild(ProjectsHeader);

    const NavProjectHeader = document.createElement('h3');
    NavProjectHeader.textContent = 'Projects';
    Navbar.appendChild(NavProjectHeader);

    if (projects.length !== 0) {
        projects.forEach(project => {
            if (project !== null){
                createProjectDiv(project);
            }
            
        });
    }

    

    //Final card for adding task
    const addProjectDiv = document.createElement('div');
    addProjectDiv.classList.add('add-project-btn', 'projects-card');
    const addButton = document.createElement('button');
    addButton.classList.add('add-project');
    addButton.textContent = 'Add +';
    addProjectDiv.appendChild(addButton);
    content.appendChild(addProjectDiv);
}

export default displayProjects;