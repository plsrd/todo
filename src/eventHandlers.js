import events from "./eventsBus";

function initEventHandlers() {
  events.on('addButtonCreated', addButtonEvents);
  events.on('projectFormCreated', projectFormEvents);
  events.on('taskBtnCreated', taskBtnEvents);
  events.on('taskInputCreated', taskInputEvents);
  events.on('addTaskBtnCreated', addTaskBtnEvents);
  events.on('addTaskEvents', addTaskEvents);
  events.on('closeFormCreated', closeFormEvents);
  events.on('addProjectNavLink', addProjectNavLink);
}

function addButtonEvents(){
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    events.emit('addNewProject');
    if (document.getElementById('task-form')) {
      events.emit('closeForm', document.getElementById('task-form'));
    }
  });
}

function projectFormEvents(button) {
  button.addEventListener('click', () => {
    events.emit('checkInputs');
  });
}

function taskBtnEvents(button) {
  button.addEventListener('click', () => {
    events.emit('createTask');
  });
}

function taskInputEvents(input){
  input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      events.emit('createTask');
    }
  });
}

function addTaskBtnEvents(button){
  button.addEventListener('click', () => {
    events.emit('createTaskForm', button);
  });
}

function addTaskEvents(checkbox) {
  checkbox.addEventListener('click', () => {
    events.emit('taskComplete', checkbox);
  })
}

function closeFormEvents(button) {
  button.addEventListener('click', () => {
    events.emit('closeForm', button.parentNode);
  });
}

function addProjectNavLink(object) {
  const link = document.getElementById(`${object.id}-nav`);
  link.addEventListener('click', () => {
    events.emit('showProjectView', object);
  });
}

export default initEventHandlers;
