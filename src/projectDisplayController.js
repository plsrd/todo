import events from './eventsBus';
import { domCache, cacheElements, createElement } from './projectFormController';


function initProjectDisplay() {
  events.on('newProject', drawProject);
  events.on('drawTask', displayTasks);
  events.on('taskStatusChanged', updateTaskClass);
}

function drawProject(object) {
  domCache.addBtn.classList.remove('disabled');
  domCache.projectsWindow.removeChild(domCache.createProject);
  createElement('div', domCache.projectsWindow, object.id, {'class': 'project'});
  cacheElements([object.id]);

  const target = domCache[`${object.id}`];
  createElement('div', target, `${object.title}-container`, {'class': 'title-container'});
  const titleContainer = document.getElementById(`${object.title}-container`);
  createElement('h2', titleContainer, 'none', {'class': 'project-title'}, object.title);
  createElement('p', titleContainer, 'none', {'class': `priority priority-${object.priority}`}, object.priority);
  createElement('p', target, 'none', {'class': 'project-description'}, object.description);
  createElement('p', target, 'none', {'class': 'project-notes'}, object.notes);
  createElement('div', target, `${object.id}tasks-container`, {'class': 'tasks-container', 'type': 'text', 'placeholder': 'task'});
  cacheElements([`${object.id}tasks-container`]);
  const container = domCache[`${object.id}tasksContainer`];
  createElement('div', container, `${object.id}-add`, {'class': 'task-header'});
  const header = document.getElementById(`${object.id}-add`);
  createElement('p', header, `${object.id}task-header`, {}, 'Tasks')
  createElement('button', header, `${object.id}add-task`, {'type': 'button', 'class': 'task-btn'}, '+');
  cacheElements([`${object.id}add-task`]);
  events.emit('addTaskBtnCreated', domCache[`${object.id}addTask`]);
  addProjectToNav(object);
}

function addProjectToNav(object) {
  const nav = document.getElementById('lists-lnk');
  createElement('p', nav, `${object.id}-nav`, {'class': 'project-nav-link'}, object.title);
  events.emit('addProjectNavLink', object);
}

function displayTasks(data) {
  const task = data[0];
  const parent = document.getElementById(data[1].id);
  createElement('div', parent, `${task.id}-container`, {'class': 'project-task-container'});
  const container = document.getElementById(`${task.id}-container`);
  createElement('input', container, `${task.id}`, {'type': 'checkbox', 'class': 'task', 'name': data[1].tasks.indexOf(task)});
  createElement('label', container, `${task.id}label`, {'for': data[1].tasks.indexOf(task)}, task.task);
  createElement('p', container, `${task.id}-date`, {'class': 'due-date'}, task.dueDate);
  cacheElements([task.id, `${task.id}label`]);
  events.emit('addTaskEvents', domCache[createId(task.id)]);
}


function createId(id) {
  let key = id.split('-');
  let word = key[1].charAt(0).toUpperCase() + key[1].slice(1);
  key.splice(1, 1, word);
  return key.join('');
}

function updateTaskClass(data) {
  const element = domCache[createId(`${data[0]}label`)];
  data[1] === true ? element.classList.add('complete') : element.classList.remove('complete');
}



export default initProjectDisplay;