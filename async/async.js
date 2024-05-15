const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile(
      "../built-in_modules/pathcheck/subfolder/first.txt",
      "utf8"
    );
    const second = await readFile(
      "../built-in_modules/pathcheck/subfolder/second.txt",
      "utf8"
    );
    await writeFile(
      "../built-in_modules/pathcheck/subfolder/async_await.txt",
      "This is how to use async await!"
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
