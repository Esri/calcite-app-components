(function() {
  const parseTemplate = function(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.head.querySelector("template");
  };

  const loadToggles = async function() {
    const response = await window.fetch("toggles.template");
    const text = await response.text();
    const template = parseTemplate(text);
    const nav = document.querySelector('nav');
    nav && nav.after(template.content);
    attachHandlers();
  };

  const attachHandlers = function() {
    const buttons = document.querySelectorAll(".toggles calcite-button");
    debugger;
    buttons.forEach(button => {
      button.addEventListener("click", event => toggleProperty(event.target.dataset.jsId));
    });
  }

  let calciteblocks = null;
  const excludeBlocks = ["html", "calcite-demo-nav", "calcite-button"];
  const toggleProperty = function(property) {
    calciteblocks = calciteblocks || Array.from(document.querySelectorAll(".hydrated"));

    for (i = 0; i < calciteblocks.length; i++) {
      const block = calciteblocks[i];
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
