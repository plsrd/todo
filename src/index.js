import events from "./eventsBus"
import initEventHandlers from './eventHandlers'
import initProjectHandler from "./projectHandler"
import initProjectFormController from "./projectFormController";

initEventHandlers();
initProjectHandler();
initProjectFormController();

events.emit('addButtonCreated');