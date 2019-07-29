const root = window.location.pathname.split('demos').shift();

const template = document.createElement('template');
template.innerHTML = `
<style>
nav {
  width: 100vw;
  background-color: #333;
  color: #FFF;
}
ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border-left: 1px solid white;
}
a {
  display: block;
  padding: 12px 24px;
  color: inherit;
  text-decoration: none;
}
a:hover {
  background-color: black;
}
a.is-active {
  background-color: #008DE4;
}
</style>
<nav class="styleguide--nav">
    <ul>
      <li><a href="${root}">Home</a></li>
      <li><a href="${root}demos/calcite-action/">Calcite Action</a></li>
      <li><a href="${root}demos/calcite-action-bar/">Calcite Action Bar</a></li>
      <li><a href="${root}demos/calcite-action-pad/">Calcite Action Pad</a></li>
      <li><a href="${root}demos/calcite-block.html">Calcite Block</a></li>
      <li><a href="${root}demos/calcite-flow/">Calcite Flow</a></li>
      <li><a href="${root}demos/calcite-flow-item/">Calcite Flow Item</a></li>
      <li><a href="${root}demos/calcite-picker.html">Calcite Picker</a></li>
      <li><a href="${root}demos/calcite-tip.html">Calcite Tip</a></li>
      <li><a href="${root}demos/calcite-tip-manager.html">Calcite Tip Manager</a></li>
    </ul>
</nav>
`;

class StyleguideNav extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const activeLink = this._shadowRoot.querySelector(`a[href*="${window.location.pathname}"]`);
    activeLink && activeLink.classList.add('is-active');
  }
}
window.customElements.define('calcite-styleguide-nav', StyleguideNav);
