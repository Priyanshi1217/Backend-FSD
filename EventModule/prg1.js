// Event
// EventEmitter- on(emit event para,callback)-register event or event listener,emit(event param)-trigger event/create event/fire event
const EventEmitter=require('events');
const event=new EventEmitter();
event.on("greet",()=>{
console.log("This is event emitter");
})
event.emit("greet");

