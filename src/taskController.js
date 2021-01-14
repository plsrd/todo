import events from './eventsBus'
import { domCache, cacheElements, createElement, createInputFields } from './projectFormController';

function initTaskController() {
  events.on('createTaskContainer', createTaskContainer);
  events.on('createTaskForm', createTaskForm);
  events.on('createTask', createTask)
}

function createTaskContainer(target) {
  createElement('div', target, 'tasks-container', {'class': 'tasks-container', 'type': 'text', 'placeholder': 'task'});
  cacheElements(['tasks-container']);
  const container = domCache.tasksContainer;
  createElement('p', container, 'task-header', {}, 'Tasks')
  createElement('button', domCache.tasksContainer, 'add-task', {'type': 'button', 'class': 'task-btn'}, '+');
  cacheElements(['add-task']);
  events.emit('addTaskBtnCreated', domCache.addTask);
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
  constructor(task, status) {
    this.task = task;
    this.status = status;
  }

  set parent(id) {
    this.project = id;
  }
}

function createTask() {
  const value = domCache.task.value;
  if (value) {
    if (domCache.task.classList.contains('empty')) { domCache.task.classList.remove('empty') }
    domCache.tasks.push(new Task(value, 'incomplete'));
    drawTask(value);
    domCache.task.value = '';
    events.emit('updateTasks', domCache.tasks);
  } else {
    domCache.task.classList.add('empty');
  }
}

function drawTask(value) {
  createElement('div', domCache.tasksContainer, 'created-tasks', {'class': 'created-task-container'});
  cacheElements(['created-tasks']);
  const container = domCache.createdTasks;
  createElement('input', container, 'none', {'type': 'checkbox', 'class': 'task', 'name': value});
  createElement('label', container, 'none', {'for': value}, value);
}

export default initTaskController;