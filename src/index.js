import events from './eventsBus'
import initEventHandlers from './eventHandlers'
import initProjectHandler from './projectHandler'
import initProjectFormController from './projectFormController'
import initProjectDisplay from  './projectDisplayController'

initEventHandlers();
initProjectHandler();
initProjectFormController();
initProjectDisplay();

events.emit('addButtonCreated');