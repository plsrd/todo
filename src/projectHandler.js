import events from "./eventsBus";

function initProjectHandler() {
  events.on('createProject', createNewProject);
  getExistingProjects();
  events.on('taskComplete', updateTaskStatus);
  events.on('addNewTask', addNewTask);
  events.on('showProjectView', showProjectView);
}

let projects = [];

function getExistingProjects() {
  if (projects[0] !== undefined) {
    events.emit('createProject', projects);
  }
}

class Project {
  constructor(title, description, priority, notes) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.notes = notes;
    this.id = `proj${document.getElementsByClassName('project').length}`;
    this.tasks = [];
  }

}

export const createNewProject = (data) => {
  let newProject = new Project(data[0], data[1], data[2], data[3], data[4]);
  projects.push(newProject);
  events.emit('newProject', newProject);
}

function addNewTask(task){
  const project = projects.find(project => project.id === task.parent);
  task.identifier = `${project.id}-task${project.tasks.length}`;
  project.tasks.push(task);
  events.emit('drawTask', [task, project]);
}

function updateTaskStatus(taskId) {
  const data = taskId.id.split('-');
  const project = projects.find(project => project.id === data[0])
  const task = project.tasks.find(task => task.id === taskId.id);
  task.status = !task.status;
  events.emit('taskStatusChanged', [taskId.id, task.status]);
}

function showProjectView(object){
  console.log('show project view');
}
export default initProjectHandler;