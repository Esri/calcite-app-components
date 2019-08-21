(function() {

  const root = window.location.pathname.split('demos').shift();

  function loadCss(url) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = root + url;
    document.head.appendChild(link);
  }

  function loadScript(url, options) {
    let script = document.createElement('script');
    if(options) {
      Object.keys(options).forEach( key => {
        script[key] = options[key];
      });
    }
    script.src = root + url;

    document.head.appendChild(script);
  }

  loadCss("demos/demos.css");
  loadCss("build/calcite.css");
  loadScript("build/calcite.esm.js", { type: "module" });
  loadScript("build/calcite.js", { noModule: true });
})();
