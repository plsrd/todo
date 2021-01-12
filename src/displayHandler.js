import events from './eventsBus';


function initDisplayHandler() {
  events.on('addNewProject', drawProjectInput)
}

const domCache = {
  projectsWindow: document.getElementById('projects-window'),
}

function createElement(type, target, id, attributes) {
  const el = document.createElement(type);
  target.appendChild(el);
  el.setAttribute('id', id);
  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
}

function createSelect(target, id, options) {
  const el = document.createElement('select');
  target.appendChild(el);
  el.setAttribute('id', id);
  options.forEach(item => {
    const option = document.createElement('option');
    option.setAttribute('value', item);
    option.textContent = item;
    el.appendChild(option);
  });
}

function drawProjectInput() {
  createElement('input', domCache.projectsWindow, 'title', {'type': 'text', 'placeholder': 'project title'});
  createElement('input', domCache.projectsWindow, 'description', {'type': 'text', 'placeholder': 'project description'});
  createElement('input', domCache.projectsWindow, 'due date', {'type': 'date', 'placeholder': 'project due date'});
  createSelect(domCache.projectsWindow, 'priority', [1, 2, 3, 4, 5]);
  createElement('input', domCache.projectsWindow, 'notes', {'type': 'text', 'placeholder': 'notes'});
}

export default initDisplayHandler;