var moment = require("moment");
var math = require("mathjs");

console.log("Hello from JS");

var dateTime = moment().startOf("hour").fromNow();
console.log(dateTime);

console.log(math.sqrt(-4).toString());

function g({ name: x }) {
  console.log(x);
}
g({ name: 5 });

function f(x, ...y) {
  return x * y.length;
}
console.log(f(3, "hello", true, "bye"));
