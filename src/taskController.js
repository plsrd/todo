import events from './eventsBus'
import { domCache, cacheElements, createElement, createInputFields } from './projectFormController';

function initTaskController() {
  events.on('createTaskForm', createTaskForm);
  events.on('createTask', createTask)
}

function createTaskForm(target) {
  createElement('div', target, 'tasks-container', {'class': 'tasks-container', 'type': 'text', 'placeholder': 'task'});
  cacheElements(['tasks-container']);
  const container = domCache.tasksContainer;
  createInputFields(['task'], container);
  createElement('button', container, 'task-btn', {'type': 'button', 'class': 'task-btn'}, '+');
  cacheElements(['task', 'task-btn']);
  events.emit('taskBtnCreated', domCache.taskBtn);
}

function createTask() {
  console.log(domCache.task.value);
}

export default initTaskController;