import events from "./eventsBus";

function initProjectHandler() {
  events.on('createProject', createNewProject);
  getExistingProjects();
}

let projects = [];

function getExistingProjects() {
  if (projects[0] !== undefined) {
    events.emit('createProject', projects);
  }
}

class Project {
  constructor(title, description, dueDate, priority, notes, tags) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.tags = tags.split(',');
  }
}

export const createNewProject = (data) => {
  let newProject = new Project(data[0], data[1], data[2], data[3], data[4], data[5]);
  projects.push(newProject);
  events.emit('newProject', newProject);
}


export default initProjectHandler;