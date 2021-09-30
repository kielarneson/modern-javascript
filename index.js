var moment = require("moment");

console.log("Hello from JS");

var dateTime = moment().startOf("hour").fromNow();
console.log(dateTime);
