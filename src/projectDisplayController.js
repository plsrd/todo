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
  createElement('h2', target, 'none', {'class': 'project-title'}, object.title);
  createElement('p', target, 'none', {'class': 'project-due-date'}, object.dueDate);
  createElement('p', target, 'none', {'class': `priority-${object.priority}`}, object.priority);
  createElement('p', target, 'none', {'class': 'project-decription'}, object.description);
  createElement('p', target, 'none', {'class': 'project-notes'}, object.notes);
  createElement('div', target, 'tasks-container', {'class': 'tasks-container', 'type': 'text', 'placeholder': 'task'});
  cacheElements(['tasks-container']);
  const container = domCache.tasksContainer;
  createElement('p', container, 'task-header', {}, 'Tasks')
  createElement('button', container, 'add-task', {'type': 'button', 'class': 'task-btn'}, '+');
  cacheElements(['add-task']);
  events.emit('addTaskBtnCreated', domCache.addTask);
}

function displayTasks(data) {
  const task = data[0];
  const parent = document.getElementById(data[1].id);
  console.log(task)
  createElement('div', parent, `${task.id}-container`, {'class': 'project-task-container'});
  const container = document.getElementById(`${task.id}-container`);
  createElement('input', container, `${task.id}`, {'type': 'checkbox', 'class': 'task', 'name': data[1].tasks.indexOf(task)});
  createElement('label', container, `${task.id}label`, {'for': data[1].tasks.indexOf(task)}, task.task);
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
  console.log(element);
  data[1] === true ? element.classList.add('complete') : element.classList.remove('complete');
}

function displayTags(tags, target) {
  let classNum = 0;
  tags.forEach(tag => {
    let name;
    if (tag[0] === ' ') {
      name  = tag.slice(1);
    } else {
      name = tag;
    }
    createElement('p', target, 'none', {'class': `${name} ${classNum}`}, tag);
    if (classNum === 5) {
      classNum = 0;
    } else {
      classNum++;
    }
  });
}


export default initProjectDisplay;