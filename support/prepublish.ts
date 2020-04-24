const chalk = require("chalk");
const childProcess = require("child_process");
const branch = childProcess.execSync("git rev-parse --abbrev-ref HEAD");

if (branch.toString().trim() === "master") {
  process.exit();
} else {
  const message = chalk.red(
    `Error: ${chalk.white(
      `You may only run ${chalk.green("npm publish")} from the ${chalk.yellow(
        "master"
      )} branch. You are on ${chalk.yellow(branch)}.`
    )}`
  );

  console.error(message);
  process.exit(1);
}
