import events from './eventsBus'
import initEventHandlers from './eventHandlers'
import initProjectHandler from './projectHandler'
import initProjectFormController from './projectFormController'
import initProjectDisplay from  './projectDisplayController'
import initTagController from './tagController'

initEventHandlers();
initProjectHandler();
initProjectFormController();
initProjectDisplay();
initTagController();

events.emit('addButtonCreated');