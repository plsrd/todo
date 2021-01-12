import events from './eventsBus';


function initProjectFormController() {
  events.on('addNewProject', createProjectInputs);
  events.on('checkInputs', getFormInfo);
}

export const domCache = {
  main: document.getElementById('main'),
  projectsWindow: document.getElementById('projects-window'),
  addBtn: document.getElementById('add'),
}

function cacheElements(els) {
  els.forEach(id => {
    if (id.includes('-')) {
      let key = id.split('-');
      let word = key[1].charAt(0).toUpperCase() + key[1].slice(1);
      key.splice(1, 1, word);
      domCache[`${key.join('')}`] = document.getElementById(id);
    } else {
      domCache[`${id}`] = document.getElementById(id);
    }
  });
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

function createProjectInputs() {
  domCache.main.removeChild(domCache.addBtn);
  createElement('form', domCache.projectsWindow, 'create-project');

  cacheElements(['create-project']);

  createElement('label', domCache.createProject, 'title-label', {'for': 'title'}, 'title');
  createElement('input', domCache.createProject, 'title', {'type': 'text', 'placeholder': 'project title'});

  createElement('label', domCache.createProject, 'description-label', {'for': 'description'}, 'description');
  createElement('input', domCache.createProject, 'description', {'type': 'text', 'placeholder': 'project description'});

  createElement('label', domCache.createProject, 'due-date-label', {'for': 'due-date'}, 'due date');
  createElement('input', domCache.createProject, 'due-date', {'type': 'date', 'placeholder': 'project due date'});

  createElement('label', domCache.createProject, 'priority-label', {'for': 'priority'}, 'priority');
  createSelect(domCache.createProject, 'priority', [1, 2, 3, 4, 5]);

  createElement('label', domCache.createProject, 'notes-label', {'for': 'notes'}, 'notes');
  createElement('input', domCache.createProject, 'notes', {'type': 'text', 'placeholder': 'notes'});

  createElement('input', domCache.createProject, 'create-btn', {'type': 'button'}, 'create');
  
  cacheElements(['title', 'description', 'due-date', 'priority', 'notes', 'create-btn']);

  events.emit('projectFormCreated', domCache.createBtn);
}



function getFormInfo() {
  let data = [];
  let keys = ['title', 'description', 'dueDate', 'priority', 'notes'];
  for (let i = 0; i < keys.length; i++){
      if (domCache[`${keys[i]}`].value !== '') {
        data.push(domCache[`${keys[i]}`].value);
      } else {
        domCache[`${keys[i]}`].classList.add('empty');
        return
      }
  }
  events.emit('createProject', data);
  console.log('emit project');
}

export default initProjectFormController;