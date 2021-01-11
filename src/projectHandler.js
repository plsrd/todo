import events from "./eventsBus";

function initProjectHandler() {
  (() => {
    events.on('addBook', createNewProject)
  })();
}

let projects = [];

  class Project {
    constructor(title, description, dueDate, priority, notes, tasks) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.tasks = tasks;
    }
  }

  const createNewProject = (data) => {
    console.log('creatingBook')
    let newProject = new Project(data[0], data[1], data[2], data[3], data[4], data[5]);
    projects.push(newProject);
    console.log(newProject);
  }


export default initProjectHandler;