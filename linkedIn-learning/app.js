// const {inc, dec, anything} = require('./global');
//
// console.log(inc());
// console.log(dec());
// console.log(anything);

const events = require("events");
let emiiter = new events.EventEmitter();

emiiter.on("custom", (message, user) => {
    console.log(message);
    console.log(user);
})

emiiter.emit("custom", "Hello, World!", "computer");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();

    if (input === "exit") {
        emiiter.emit("custom", "GoodBye!", "process");
        emiiter.exit();
    }

    emiiter.emit("custom", data.toString().trim(),"terminate");
})