import events from "./eventsBus";

function initEventHandlers() {
  events.on('addButtonCreated', addButtonEvents);
  events.on('projectFormCreated', projectFormEvents)
}

function addButtonEvents(){
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    events.emit('addNewProject');
  });
}

function projectFormEvents(object) {
  object.createBtn.addEventListener('click', () => {
    events.emit('checkInputs');
    console.log('checkInputs');
  })
}

export default initEventHandlers;