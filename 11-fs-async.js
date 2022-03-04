const { readFile, writeFile } = require("fs");
console.log("start of tasks");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("going onnn");
    writeFile(
      "./content/result-async.txt",
      `combining text files: ${first} and ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("final task");
      }
    );
  });
});
console.log("outside/after/startting new task");
