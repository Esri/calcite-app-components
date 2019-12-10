const chalk = require('chalk');
const childProcess = require("child_process");
const branch = childProcess.execSync("git rev-parse --abbrev-ref HEAD");
process.exit();
// if( branch.toString().trim() === "master" ) {
//   process.exit();
// } else {
//   console.log(chalk.green(`
//   *  ______     ______     __         ______     __     ______   ______
//   * /\\  ___\\   /\\  __ \\   /\\ \\       /\\  ___\\   /\\ \\   /\\__  _\\ /\\  ___\\
//   * \\ \\ \\____  \\ \\  __ \\  \\ \\ \\____  \\ \\ \\____  \\ \\ \\  \\/_/\\ \\/ \\ \\  __\\
//   *  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\    \\ \\_\\  \\ \\_____\\
//   *   \\/_____/   \\/_/\\/_/   \\/_____/   \\/_____/   \\/_/     \\/_/   \\/_____/
//   *  ______     ______     ______     ______     ______
//   * /\\  ___\\   /\\  == \\   /\\  == \\   /\\  __ \\   /\\  == \\
//   * \\ \\  __\\   \\ \\  __<   \\ \\  __<   \\ \\ \\/\\ \\  \\ \\  __<
//   *  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\
//   *   \\/_____/   \\/_/ /_/   \\/_/ /_/   \\/_____/   \\/_/ /_/
//   *
//   *`, chalk.red(`You may only run`, chalk.white('$ npm publish'), `from the master branch. You are on ${branch.toString()}.
//   `)));
//   process.exit(1);
// }
