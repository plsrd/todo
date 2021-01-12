import events from './eventsBus';
import { domCache } from './projectFormController';


function initProjectDisplay() {
  events.on('createProject', drawProject)
}

function drawProject(object) {
  console.log(domCache);
}

export default initProjectDisplay;