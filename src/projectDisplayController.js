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
  clearDisplay(domCache.projectsWindow);

  createElement('div', domCache.projectsWindow, object.title, {'class': 'project'});
  cacheElements([object.title]);

  const target = domCache[`${object.title}`];
  createElement('p', target, 'none', {'class': 'project-due-date'}, object.dueDate);
  createElement('p', target, 'none', {'class': `priority-${object.priority}`}, object.priority);
  createElement('h2', target, 'none', {'class': 'project-title'}, object.title);
  createElement('p', target, 'none', {'class': 'project-decription'}, object.description);


}

export default initProjectDisplay;