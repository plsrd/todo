import events from "./eventsBus"
import initProjectHandler from "./projectHandler"

initProjectHandler();

(function eventHandlers() {
  const addBtn = document.getElementById('add');
console.log(addBtn)
  addBtn.addEventListener('click', () => {
    events.emit('addBook', [1,2,3,4,['a', 'b']]);
    console.log('emitting')
  });
})();