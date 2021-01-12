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

export function cacheElements(els) {
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

export function createElement(type, target, id, attributes, content) {
  const el = document.createElement(type);
  if (attributes.hasOwnProperty('prepend')) {
    target.prepend(el)
  } else {
    target.appendChild(el);
  }
  if (id !== 'none') {
    el.setAttribute('id', id)
  }
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
  domCache.addBtn.classList.add('disabled');
  createElement('form', domCache.projectsWindow, 'create-project', {'prepend': true});

  cacheElements(['create-project']);

  const target = domCache.createProject;

  createElement('label', target, 'title-label', {'for': 'title'}, 'title');
  createElement('input', target, 'title', {'type': 'text', 'placeholder': 'project title'});

  createElement('label', target, 'description-label', {'for': 'description'}, 'description');
  createElement('input', target, 'description', {'type': 'text', 'placeholder': 'project description'});

  createElement('label', target, 'due-date-label', {'for': 'due-date'}, 'due date');
  createElement('input', target, 'due-date', {'type': 'date', 'placeholder': 'project due date'});

  createElement('label', target, 'priority-label', {'for': 'priority'}, 'priority');
  createSelect(target, 'priority', [1, 2, 3, 4, 5]);

  createElement('label', target, 'notes-label', {'for': 'notes'}, 'notes');
  createElement('input', target, 'notes', {'type': 'text', 'placeholder': 'notes'});

  createElement('label', target, 'tags-label', {'for': 'tags'}, 'tags');
  createElement('input', target, 'tags', {'type': 'text', 'placeholder': 'tags'});

  createElement('input', target, 'create-btn', {'type': 'button'}, 'create');
  
  cacheElements(['title', 'description', 'due-date', 'priority', 'notes', 'tags', 'create-btn']);

  events.emit('projectFormCreated', domCache.createBtn);
}



function getFormInfo() {
  let data = [];
  let keys = ['title', 'description', 'dueDate', 'priority', 'notes', 'tags'];
  for (let i = 0; i < keys.length; i++){
      if (domCache[`${keys[i]}`].value !== '') {
        data.push(domCache[`${keys[i]}`].value);
      } else {
        domCache[`${keys[i]}`].classList.add('empty');
        return
      }
  }
  events.emit('createProject', data);
}

export default initProjectFormController;