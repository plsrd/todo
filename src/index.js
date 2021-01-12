import events from "./eventsBus"
import initProjectHandler from "./projectHandler"
import initDisplayHandler from "./displayHandler";

initProjectHandler();
initDisplayHandler();

(function eventHandlers() {
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    events.emit('addNewProject');
  });
})();