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

function getFormInfo(object) {
  let data = [];
  let keys = ['title', 'description', 'dueDate', 'priority', 'notes'];
  keys.forEach(key => {
    data.push(object[`${key}`].value);
  });
  return data;
}

function projectFormEvents(object) {
  object.createBtn.addEventListener('click', () => {
    events.emit('createProject', getFormInfo(object));
  })
}

export default initEventHandlers;