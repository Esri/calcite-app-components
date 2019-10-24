const { close, copyFileSync, open, utimes, watch } = require("fs");
const { normalize } = require("path");

const projectRoot = normalize(`${__dirname}/../`);
const sourceDir = `${projectRoot}src/`;
const sourceDemoDir = `${sourceDir}demos/`;
const destinationDir = `${projectRoot}www/`;
const destinationDemoDir = `${destinationDir}demos/`;
const sourceIndexFile = `${sourceDir}index.html`;
const targetTouchFile = `${sourceDir}components/interfaces.ts`;
const noop = () => {};

watch(sourceDemoDir, (type, changedFile) => triggerBuild(sourceDemoDir, destinationDemoDir, changedFile));
watch(sourceIndexFile, (type, changedFile) => triggerBuild(sourceDir, destinationDir, changedFile));

function triggerBuild(sourceDir, destinationDir, changedFile) {
  if (!changedFile.endsWith(".html")) {
    return;
  }

  copyFileSync(`${sourceDir}${changedFile}`, `${destinationDir}${changedFile}`);
  touch(targetTouchFile, noop);
}

function touch(path, callback) {
  const time = new Date();

  utimes(path, time, time, (err) => {
    if (err) {
      return open(path, "w", (err, fd) => (err ?
                                           callback(err) :
                                           close(fd, callback)));
    }

    callback();
  });
}


