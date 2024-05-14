const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./pathcheck/subfolder/first.txt", "utf8");
const second = readFileSync("./pathcheck/subfolder/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./pathcheck/subfolder/result.txt",
  `heres result ${first} , ${second}`,
  { flag: 'a' }
);
