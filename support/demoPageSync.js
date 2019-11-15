const { close, copyFileSync, open, utimes, watch } = require("fs");
const { normalize } = require("path");
const chokidar = require('chokidar');

const projectRoot = normalize(`${__dirname}/../`);
const sourceDir = normalize(`${projectRoot}src/`);
const sourceDemoDir = normalize(`${sourceDir}demos/`);
const destinationDir = normalize(`${projectRoot}www/`);
const destinationDemoDir = normalize(`${destinationDir}demos/`);
const sourceIndexFile = normalize(`${sourceDir}index.html`);
const buildTriggeringFile = normalize(`${sourceDir}components/interfaces.ts`);
const noop = () => {};

const demoWatcher = chokidar.watch(normalize(`${sourceDemoDir}**/*[(.js)(.css)(.html)(.template)]`), {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true
});
demoWatcher.on('all', (eventName, path) => triggerBuild( sourceDemoDir, destinationDemoDir, path ) );

const indexWatcher = chokidar.watch(sourceIndexFile, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true
});
indexWatcher.on('change', (path) => triggerBuild( sourceDir, destinationDir, path ) );

function triggerBuild(srcDir, destinationDir, path) {
  const dest = path.replace(srcDir, destinationDir);
  copyFileSync(path, dest);

  //This triggers a rebuild in Stencil, which triggers a livereload of the demo page.
  markFileAsModified(buildTriggeringFile);
}

function markFileAsModified(path, done = noop) {
  const time = new Date();

  utimes(path, time, time, (err) => {
    if (err) {
      return open(path, "w", (err, fd) => (err ?
                                           done(err) :
                                           close(fd, done)));
    }

    done();
  });
}


