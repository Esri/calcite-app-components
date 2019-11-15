(function() {
  const parseTemplate = function(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.head.querySelector("template");
  };

  const loadToggles = async function() {
    const root = window.location.pathname.split("demos").shift();
    const response = await window.fetch(`${root}demos/toggles.template`);
    const text = await response.text();
    const template = parseTemplate(text);
    const nav = document.querySelector('nav') || document.querySelector('calcite-demo-nav');
    nav && nav.after(template.content);
    attachHandlers();
  };

  const attachHandlers = function() {
    const buttons = document.querySelectorAll(".toggles calcite-button");
    buttons.forEach(button => {
      button.addEventListener("click", event => toggleProperty(event.target.dataset.jsId));
    });
  }

  let calciteBlocks = null;
  const excludeBlocks = ["html", "calcite-demo-nav", "calcite-button"];
  const toggleProperty = function(property) {
    calciteBlocks = calciteBlocks || Array.from(document.querySelectorAll(".hydrated"));

    for (i = 0; i < calciteBlocks.length; i++) {
      const block = calciteBlocks[i];
      if( !excludeBlocks.includes(block.tagName.toLowerCase()) ) {
        block.toggleAttribute(property);
      }
    }
  }

  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', loadToggles);
  } else {  // `DOMContentLoaded` has already fired
    loadToggles();
  }
})();
