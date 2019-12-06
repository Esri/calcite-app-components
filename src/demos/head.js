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

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  const SCRIPTS = isIE ? CALCITE_SCRIPTS : DEV_SCRIPTS.concat(CALCITE_SCRIPTS);
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
