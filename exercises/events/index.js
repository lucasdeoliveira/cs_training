// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {

    if(!this.events[eventName])
      this.events[eventName] = [];

    this.events[eventName].push(callback);  
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {

    for (const fn of this.events[eventName]) {
      fn();
    }

  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {

    this.events[eventName] = [];

  }

}

c = new Events();
c.on('click', () => {
  console.log('shablau');
});

c.on('click', () => {
  console.log('shablau2');
});

c.trigger('click');

c.off('click');


module.exports = Events;
