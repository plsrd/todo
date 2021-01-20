import events from './eventsBus'
import initEventHandlers from './eventHandlers'
import initProjectHandler from './projectHandler'
import initProjectFormController from './projectFormController'
import initProjectDisplay from  './projectDisplayController'
import initTaskController from './taskController'

initEventHandlers();
initProjectHandler();
initProjectFormController();
initProjectDisplay();
initTaskController();

events.emit('addButtonCreated');