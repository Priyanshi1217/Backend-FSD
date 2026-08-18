// Stimulate DOM-like event handling in Node.js using events
// addEventListener-.on()
// dispatchevent-.emit() 
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("click", (name) => {
    console.log("Click event triggered");
    console.log(`hello cse 24${name}` );
    
});

emitter.on("mouseover", () => {
    console.log("Mouseover event triggered");
});

emitter.emit('click',' Satwik');
emitter.emit("mouseover");