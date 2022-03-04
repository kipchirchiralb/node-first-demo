// file module
const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);
console.log("going onnnn");

writeFileSync(
  "./content/result-sync.txt",
  `The previous texts were : ${first} and ${second}`,
  { flag: "a" }
);

console.log("done with the task");
console.log("starting the next tast");

// {flag 'a'} - appends the text to the file rather than the default property of overwriting.
