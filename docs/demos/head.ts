(() => {
  const CSS = ["demos/demos.css", "build/calcite-app.css", "vendor/@esri/calcite-components/calcite.css"];

  interface Script {
    src: string;
    type?: "module";
    noModule?: boolean;
  }

  const SCRIPTS: Script[] = [
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

  // Assume server is running in a development environment if there is a port present in the URL and reload demo pages.
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

  function loadCss(url: string): void {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ROOT + url;
    document.head.appendChild(link);
  }

  function loadScript(script: Script): void {
    const scriptElement = document.createElement("script");

    Object.keys(script).forEach((key) => {
      scriptElement[key] = key === "src" ? ROOT + script[key] : script[key];
    });

    document.head.appendChild(scriptElement);
  }

  CSS.forEach(loadCss);
  SCRIPTS.forEach(loadScript);
})();
