import events from './eventsBus'
import { domCache, cacheElements, createElement, createInputFields } from './projectFormController';

function initTaskController() {
  events.on('createTaskForm', createTaskForm);
  events.on('createTask', createTask);
}

function createTaskForm() {
  if (!domCache.task) {
    domCache.addTask.classList.add('disabled');
    const container = domCache.tasksContainer;
    createInputFields(['task'], container);
    createElement('button', container, 'task-btn', {'type': 'button', 'class': 'task-btn'}, '+');
    cacheElements(['task', 'task-btn']);
    domCache.tasks = [];
    events.emit('taskInputCreated', domCache.task);
    events.emit('taskBtnCreated', domCache.taskBtn);
  }
}

class Task {
  constructor(task, parent) {
    this.task = task;
    this.parent = parent;
    this.complete = false;
  }

  set identifier(id) {
    this.id = id;
  }
}

function createTask() {
  const value = domCache.task.value;
  if (value) {
    if (domCache.task.classList.contains('empty')) { domCache.task.classList.remove('empty') }
    const parent = domCache.task.parentElement.parentElement.id;
    events.emit('addNewTask', new Task(value, parent));
    domCache.task.value = '';
  } else {
    domCache.task.classList.add('empty');
  }
}

export default initTaskController;