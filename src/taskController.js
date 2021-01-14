import events from './eventsBus'
import { domCache, cacheElements, createElement, createInputFields } from './projectFormController';

function initTaskController() {
  events.on('createTaskForm', createTaskForm)
}

function createTaskForm(target) {
  createElement('div', target, 'tasks-container', {'class': 'tasks-container', 'type': 'text', 'placeholder': 'task'});
  cacheElements(['tasks-container']);
  const container = domCache.tasksContainer;
  createInputFields(['task'], container);
  createElement('button', target, 'task-btn', {'type': 'button', 'class': 'task-btn'}, '+');
  createElement('button', target, 'create-btn', {'type': 'button'}, 'create');
}

export default initTaskController;