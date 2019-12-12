const rimraf = require("rimraf");

// 👇 based on https://stackoverflow.com/a/14032965

process.stdin.resume(); //so the program will not close instantly

const exitHandler = (options) => {
  if (options.cleanup) {
    rimraf.sync(`${__dirname}/../__docs-temp__`);
  }
  if (options.exit) {
    process.exit();
  }
};

// do something when app is closing
process.on("exit", exitHandler.bind(null, { cleanup: true }));

// catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

// catches uncaught exceptions
process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
