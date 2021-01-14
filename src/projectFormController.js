import events from './eventsBus';


function initProjectFormController() {
  events.on('addNewProject', createProjectForm);
  events.on('checkInputs', batchFormInfo);
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
  if (attributes && !attributes.hasOwnProperty('prepend')) {
    for (let key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  }

  if(content) {
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

export function createInputFields(fields, target) {
  fields.forEach(field => {
    const fieldName = field.split('-').join(' ');
    const type = (field.includes('date')) ? 'date' : 'text';
    createElement('label', target, 'none', {'for': field}, fieldName);
    createElement('input', target, field, {'type': type, 'placeholder': fieldName});
    });
}

function createProjectForm() {
  domCache.addBtn.classList.add('disabled');
  createElement('form', domCache.projectsWindow, 'create-project', {'prepend': true});

  cacheElements(['create-project']);

  const target = domCache.createProject;
  createInputFields(['title', 'description', 'due-date'], target);
  createElement('label', target, 'priority-label', {'for': 'priority'}, 'priority');
  createSelect(target, 'priority', [1, 2, 3, 4, 5]);
  createInputFields(['notes'], target);
  events.emit('createTaskForm', target);
  events.emit('createTagsContainer', target);
  createElement('button', target, 'create-btn', {'type': 'button'}, 'create');
  cacheElements(['title', 'description', 'due-date', 'priority', 'notes', 'create-btn']);
  events.emit('projectFormCreated', domCache.createBtn);
}



function batchFormInfo() {
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