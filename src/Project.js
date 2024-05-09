
let projects = 
      [{
        "id": 0,
        "title": "EGH400 Project",
        "dueDate" : "29-05-2024",
        "toDonts":[
        {
            "id" : 0,
            "name" : "Deep Learning Model",
            "description" : "Develop deep learning model to cleanse noisy data",
            "priority" : "high",
            "dueDate" : "9-05-2024",
            "notes" : "Ensure noise is added to original mode shapes as opposed to damage indices",
        },
        {
            "id" : 1,
            "name" : "Progress Report",
            "description" : "Submit Progress Report and Oral Presentation",
            "priority" : "low",
            "dueDate" : "29-05-2024",
            "notes" : "Use correct reporting format. Memorise speech."
        }]
    },
];

let identifier = 1;

const getTitle = document.querySelector('#title');
const getDue = document.querySelector('#dueDate');
const projectForm = document.querySelector('.project-form');

class Project {
    constructor(){

        this.id = identifier;
        this.title = getTitle.value;
        this.dueDate = getDue.value;
    }

    addProject() {
        
        console.log(projects);
        projects.push({
            id: projects.length !== 0 ? projects[projects.length-1].id + 1 : 0,
            title: this.title,
            dueDate : this.dueDate,
            toDonts: []
        });
        identifier += 1;
        projectForm.reset();
    }
    
};

export {projects };
export default Project;