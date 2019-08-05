var calciteNavItems = [
  {
    name: `<!-- taken from https://esri.github.io/calcite-ui-icons/#home -->
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
      <title>Home</title>
      <path fill="#fff" d="M16 8h-1v8h-5v-5H7v5H2V8H1l2-2.133V0h3v2.667L8.5 0z"/>
    </svg>`,
    path: "/",
  },
  {
    name: "Action",
    path: "/demos/calcite-action.html"
  },
  {
    name: "Action Bar",
    path: "/demos/calcite-action-bar.html"
  },
  {
    name: "Action Pad",
    path: "/demos/calcite-action-pad.html"
  },
  {
    name: "Block",
    path: "/demos/calcite-block.html"
  },
  {
    name: "Flow",
    path: "/demos/calcite-flow.html"
  },
  {
    name: "Flow Item",
    path: "/demos/calcite-flow-item.html"
  },
  {
    name: "Shell",
    path: "/demos/calcite-shell.html"
  },
  {
    name: "Shell Panel",
    path: "/demos/calcite-shell-panel.html"
  },
  {
    name: "Tip",
    path: "/demos/calcite-tip.html"
  },
  {
    name: "Tip Manager",
    path: "/demos/calcite-tip-manager.html"
  },
  {
    name: "Typography",
    path: "/demos/calcite-typography.html"
  }
];

var calciteNavContainer = document.createElement('div');
calciteNavContainer.innerHTML = `
<style>
.styleguide-nav {
  width: 100vw;
  background-color: #333;
  color: #FFF;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.styleguide-nav li {
  display: flex;
  border-left: 1px solid white;
}
.styleguide-nav li:first-child {
  border-left: none;
}
.styleguide-nav li:last-child {
  border-right: 1px solid white;
}
.styleguide-nav a {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  color: inherit;
  text-decoration: none;
}
.styleguide-nav a:hover {
  background-color: black;
}
.styleguide-nav a.is-active {
  background-color: #008DE4;
}
</style>

<ul class="styleguide-nav">
  ${calciteNavItems.map(item => {
    return `<li><a class="${window.location.pathname === item.path ? "is-active" : ""}" href="${item.path}">${item.name}</a></li>`;
  }).join("")}
</ul>
`;

window.onload = function(){
  window.document.body.prepend(calciteNavContainer);
}

