import events from "./eventsBus"
import initEventHandlers from './eventHandlers'
import initProjectHandler from "./projectHandler"
import initNewProjectController from "./newProjectController";

initEventHandlers();
initProjectHandler();
initNewProjectController();

events.emit('addButtonCreated');