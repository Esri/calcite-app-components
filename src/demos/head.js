(function() {
  const root = window.location.pathname.split("demos").shift();

  function loadCss(url) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = root + url;
    document.head.appendChild(link);
  }

  function loadScript(url, options) {
    let script = document.createElement("script");
    if (options) {
      var keys = Object.keys(options);
      for(var i = 0; i < keys.length; i++){
        var k = keys[i];
        script[k] = options[k];
      }
    }
    script.src = root + url;

    document.head.appendChild(script);
  }

  loadCss("demos/demos.css");
  loadCss("build/calcite-app.css");
  loadCss("vendor/@esri/calcite-components/calcite.css");
  loadScript("demos/demoPageReloader.js");
  loadScript("build/calcite-app.esm.js", { type: "module" });
  loadScript("build/calcite-app.js", { noModule: true });
  loadScript("vendor/@esri/calcite-components/calcite.esm.js", { type: "module" });
  loadScript("vendor/@esri/calcite-components/calcite.js", { noModule: true });
})();
