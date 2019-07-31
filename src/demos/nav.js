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
  display: flex;
  border-left: 1px solid white;
}
li:first-child {
  border-left: none;
}
li:last-child {
  border-right: 1px solid white;
}
a {
  display: flex;
  align-items: center;
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
      <li>
      <a href="${root}">
        <!-- taken from https://esri.github.io/calcite-ui-icons/#home -->
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
          <title>Home</title>
          <path fill="#fff" d="M16 8h-1v8h-5v-5H7v5H2V8H1l2-2.133V0h3v2.667L8.5 0z"/>
        </svg>
      </a>
      </li>
      <li><a href="${root}demos/calcite-action/">Action</a></li>
      <li><a href="${root}demos/calcite-action-bar/">Action Bar</a></li>
      <li><a href="${root}demos/calcite-action-pad/">Action Pad</a></li>
      <li><a href="${root}demos/calcite-block.html">Block</a></li>
      <li><a href="${root}demos/calcite-flow/">Flow</a></li>
      <li><a href="${root}demos/calcite-flow-item/">Flow Item</a></li>
      <li><a href="${root}demos/calcite-shell/">Shell</a></li>
      <li><a href="${root}demos/calcite-shell-panel/">Shell Panel</a></li>
      <li><a href="${root}demos/calcite-picker.html">Picker</a></li>
      <li><a href="${root}demos/calcite-tip.html">Tip</a></li>
      <li><a href="${root}demos/calcite-tip-manager.html">Tip Manager</a></li>
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
