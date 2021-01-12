import events from './eventsBus';


function initDisplayHandler() {
  events.on('addNewProject', drawProjectInput)
}

const domCache = {
  main: document.getElementById('main'),
  projectsWindow: document.getElementById('projects-window'),
  addBtn: document.getElementById('add'),
}

function cacheElement(id) {
  let key = id.split('-');
  let word = key[1].charAt(0).toUpperCase() + key[1].slice(1);
  key.splice(1, 1, word);
  domCache[`${key.join('')}`] = document.getElementById(id);
}

function createElement(type, target, id, attributes, content) {
  const el = document.createElement(type);
  target.appendChild(el);
  el.setAttribute('id', id);

  if (attributes !== undefined) {
    for (let key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  }

  if(content !== undefined) {
    el.textContent = content;
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
  domCache.main.removeChild(domCache.addBtn);
  createElement('form', domCache.projectsWindow, 'create-project');
  cacheElement('create-project');
  createElement('input', domCache.createProject, 'title', {'type': 'text', 'placeholder': 'project title'});
  createElement('input', domCache.createProject, 'description', {'type': 'text', 'placeholder': 'project description'});
  createElement('input', domCache.createProject, 'due-date', {'type': 'date', 'placeholder': 'project due date'});
  createSelect(domCache.createProject, 'priority', [1, 2, 3, 4, 5]);
  createElement('input', domCache.createProject, 'notes', {'type': 'text', 'placeholder': 'notes'});
  createElement('button', domCache.createProject, 'create-project', {'type': 'submit'}, 'create');
}

export default initDisplayHandler;