import events from "./eventsBus";

function initProjectHandler() {
  events.on('createProject', createNewProject)
}

let projects = [];

class Project {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

export const createNewProject = (data) => {
  let newProject = new Project(data[0], data[1], data[2], data[3], data[4]);
  projects.push(newProject);
  console.log(projects);
}


export default initProjectHandler;