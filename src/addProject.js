function addProject(projectsObj, title, dueDate, description) {
    projectsObj[projectsObj.length] = {
        "title": `${title}`,
        "dueDate" : `${dueDate}`,
        "description" : `${description}`,
        "to-donts":[
        {

        }]
    }
};

export default addProject;