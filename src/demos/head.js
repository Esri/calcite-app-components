(function() {
  const CSS = ["demos/demos.css", "build/calcite-app.css", "vendor/@esri/calcite-components/calcite.css"];

  const SCRIPTS = [
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

  if (location.port) {
    SCRIPTS.push({
      src: "demos/demoPageReloader.js"
    });
  }

  const IS_IE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);

  if (!IS_IE11) {
    SCRIPTS.push({
      src: "demos/toggles.js"
    });
  }

  const ROOT = window.location.pathname.split("demos").shift();

  function loadCss(url) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ROOT + url;
    document.head.appendChild(link);
  }

  function loadScript(options) {
    let scriptElement = document.createElement("script");

    Object.keys(options).forEach(function(key) {
      scriptElement[key] = key === "src" ? ROOT + options[key] : options[key];
    });

    document.head.appendChild(scriptElement);
  }

  CSS.forEach(loadCss);
  SCRIPTS.forEach(loadScript);
})();
