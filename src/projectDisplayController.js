import events from './eventsBus';
import { domCache, cacheElements, createElement } from './projectFormController';


function initProjectDisplay() {
  events.on('newProject', drawProject);
  events.on('drawTask', displayTasks);
  events.on('taskStatusChanged', updateTaskClass);
  events.on('removeTag', removeTag);
}

function drawProject(object) {
  domCache.addBtn.classList.remove('disabled');
  domCache.projectsWindow.removeChild(domCache.createProject);
  createElement('div', domCache.projectsWindow, object.id, {'class': 'project'});
  cacheElements([object.id]);

  const target = domCache[`${object.id}`];
  createElement('h2', target, 'none', {'class': 'project-title'}, object.title);
  createElement('p', target, 'none', {'class': `priority-${object.priority}`}, object.priority);
  createElement('p', target, 'none', {'class': 'project-decription'}, object.description);
  createElement('p', target, 'none', {'class': 'project-notes'}, object.notes);
  createElement('div', target, `${object.id}tasks-container`, {'class': 'tasks-container', 'type': 'text', 'placeholder': 'task'});
  cacheElements([`${object.id}tasks-container`]);
  const container = domCache[`${object.id}tasksContainer`];
  createElement('p', container, `${object.id}task-header`, {}, 'Tasks')
  createElement('button', container, `${object.id}add-task`, {'type': 'button', 'class': 'task-btn'}, '+');
  cacheElements([`${object.id}add-task`]);
  events.emit('addTaskBtnCreated', domCache[`${object.id}addTask`]);
  addProjectToNav(object);
  displayTags(object.tags, target);
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
  cacheElements([task.id, `${task.id}label`]);
  events.emit('addTaskEvents', domCache[createId(task.id)]);
}

function displayTags(tags, target) {
  tags.forEach(tag => {
    createElement('div', target, `tag-${tags.indexOf(tag)}`, {'class': tag.classNum});
    const container = document.getElementById(`tag-${tags.indexOf(tag)}`);
    createElement('p', container, 'none', {}, tag.content);
    createElement('p', container, 'none', {'class':'delete-tag'}, 'X');
  });
  events.emit('addTagEvents');
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

function removeTag(tag) {
  tag.parentNode.parentNode.removeChild(tag.parentNode);
}



export default initProjectDisplay;