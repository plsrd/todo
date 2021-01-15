import events from "./eventsBus";

function initProjectHandler() {
  events.on('createProject', createNewProject);
  getExistingProjects();
  events.on('taskComplete', updateTaskStatus);
}

let projects = [];

function getExistingProjects() {
  if (projects[0] !== undefined) {
    events.emit('createProject', projects);
  }
}

class Project {
  constructor(title, description, dueDate, priority, notes, tasks) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.tasks = tasks;
    this.id = `proj${document.getElementsByClassName('project').length}`;
  }


}

export const createNewProject = (data) => {
  let newProject = new Project(data[0], data[1], data[2], data[3], data[4], data[5]);
  projects.push(newProject);
  events.emit('newProject', newProject);
}

function updateTaskStatus(taskId) {
  const data = taskId.id.split('-');
  const project = projects.find(project => project.id === data[0])
  const task = project.tasks.find(task => task.id === taskId.id);
  task.status = 'complete';
  taskId.classList.add('completed-task');
}

export default initProjectHandler;