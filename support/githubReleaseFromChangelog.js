const packageInfo = require("../package");
const releaseFromChangelog = require("github-release-from-cc-changelog");

releaseFromChangelog(`${__dirname}/../`, packageInfo.version).then((args) => console.log("GH released"));
