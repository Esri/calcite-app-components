(function() {
  const CSS = ["demos/demos.css", "build/calcite-app.css", "vendor/@esri/calcite-components/calcite.css"];

  const DEV_SCRIPTS = [
    {
      src: "demos/toggles.js"
    },
    {
      src: "demos/demoPageReloader.js"
    }
  ];

  const CALCITE_SCRIPTS = [
    {
      src: "build/calcite-app.esm.js",
      type: "module"
    },
    {
      src: "build/calcite-app.js",
      noModule: true
    },
    {
      src: "vendor/@esri/calcite-components/calcite.esm.js",
      type: "module"
    },
    {
      src: "vendor/@esri/calcite-components/calcite.js",
      noModule: true
    }
  ];

  const DEV_HOST_WHITELIST = ["localhost", "127.0.0.1"];

  const isIE = /*@cc_on!@*/ false || !!document.documentMode; // Internet Explorer 6-11
  const loadDevScripts = !isIE && DEV_HOST_WHITELIST.indexOf(location.host) !== -1;

  const SCRIPTS = loadDevScripts ? DEV_SCRIPTS.concat(CALCITE_SCRIPTS) : CALCITE_SCRIPTS;
  const ROOT = window.location.pathname.split("demos").shift();

  function loadCss(url) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ROOT + url;
    document.head.appendChild(link);
  }

  function loadScript(scriptOptions) {
    let scriptElement = document.createElement("script");

    Object.keys(scriptOptions).forEach(function(key) {
      scriptElement[key] = key === "src" ? ROOT + scriptOptions[key] : scriptOptions[key];
    });

    document.head.appendChild(scriptElement);
  }

  CSS.forEach(loadCss);
  SCRIPTS.forEach(loadScript);
})();
