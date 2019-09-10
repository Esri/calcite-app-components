const chalk = require('chalk');
const child_process = require("child_process");
const branch = child_process.execSync("git rev-parse --abbrev-ref HEAD");

if( branch.toString() === "master" ) {
  process.exit();
} else {
  console.log(chalk.green(`
  *  ______     ______     __         ______     __     ______   ______
  * /\\  ___\\   /\\  __ \\   /\\ \\       /\\  ___\\   /\\ \\   /\\__  _\\ /\\  ___\\
  * \\ \\ \\____  \\ \\  __ \\  \\ \\ \\____  \\ \\ \\____  \\ \\ \\  \\/_/\\ \\/ \\ \\  __\\
  *  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\    \\ \\_\\  \\ \\_____\\
  *   \\/_____/   \\/_/\\/_/   \\/_____/   \\/_____/   \\/_/     \\/_/   \\/_____/
  *  ______     ______     ______     ______     ______
  * /\\  ___\\   /\\  == \\   /\\  == \\   /\\  __ \\   /\\  == \\
  * \\ \\  __\\   \\ \\  __<   \\ \\  __<   \\ \\ \\/\\ \\  \\ \\  __<
  *  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\
  *   \\/_____/   \\/_/ /_/   \\/_/ /_/   \\/_____/   \\/_/ /_/
  *
  *`, chalk.red(`You may only run`, chalk.white('$ npm publish'), `from the master branch. You are not on master.
  `)));
  process.exit(1);
}
