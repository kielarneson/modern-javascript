var moment = require("moment");
var math = require("mathjs");

console.log("Hello from JS");

var dateTime = moment().startOf("hour").fromNow();
console.log(dateTime);

console.log(math.sqrt(-4).toString());
