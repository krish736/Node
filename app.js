const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("response", (name, id) => {
  console.log(`data received , name : ${name} , id : ${id}`);
});

customEvent.on("response", () => {
  console.log("data received 2");
});

customEvent.emit("response", "john", 1);
