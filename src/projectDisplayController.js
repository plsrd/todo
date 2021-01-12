import events from './eventsBus';
import { domCache, cacheElements, createElement } from './projectFormController';


function initProjectDisplay() {
  events.on('newProject', drawProject)
}

function clearDisplay(target) {
  while (target.firstChild){
    target.removeChild(target.firstChild);
  }
}

function drawProject(object) {
  domCache.addBtn.classList.remove('disabled');
  domCache.projectsWindow.removeChild(domCache.createProject);
  createElement('div', domCache.projectsWindow, object.title, {'class': 'project'});
  cacheElements([object.title]);

  const target = domCache[`${object.title}`];
  createElement('h2', target, 'none', {'class': 'project-title'}, object.title);
  createElement('p', target, 'none', {'class': 'project-due-date'}, object.dueDate);
  createElement('p', target, 'none', {'class': `priority-${object.priority}`}, object.priority);
  createElement('p', target, 'none', {'class': 'project-decription'}, object.description);
  createElement('p', target, 'none', {'class': 'project-notes'}, object.notes);
  createTags(object.tags, target);
}

function createTags(tags, target) {
  let classNum = 0;
  tags.forEach(tag => {
    let name;
    if (tag[0] === ' ') {
      name  = tag.slice(1);
    } else {
      name = tag;
    }
    createElement('p', target, 'none', {'class': `${name} ${classNum}`}, tag);
    if (classNum === 5) {
      classNum = 0;
    } else {
      classNum++;
    }
  });
}

export default initProjectDisplay;