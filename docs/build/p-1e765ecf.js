import{h as t,H as i}from"./p-3dbfa717.js";import{C as s}from"./p-0e6af3bf.js";import{C as e}from"./p-4d533d6f.js";import{d as a}from"./p-30ecf6c3.js";function r(t,i){const s=t;s?s.set(i.value,i):s&&s.set(i.value,i)}const l={mutationObserverCallback(){this.setUpItems(),this.setUpFilter()},initialize(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=a(l.internalCalciteListChangeEvent.bind(this),0)},initializeObserver(){this.observer.observe(this.el,{childList:!0,subtree:!0})},cleanUpObserver(){this.observer.disconnect()},calciteListItemChangeHandler(t){const{selectedValues:i}=this,{item:s,value:e,selected:a,shiftPressed:r}=t.detail;a?(this.multiple||this.deselectSiblingItems(s),this.multiple&&r&&this.selectSiblings(s),i.set(e,s)):i.delete(e),this.lastSelectedItem=s,this.emitCalciteListChange()},internalCalciteListChangeEvent(){this.calciteListChange.emit(this.selectedValues)},setUpItems(t){this.items=Array.from(this.el.querySelectorAll(t)),this.items.forEach(t=>{t.icon=this.getIconType(),t.compact=this.compact,this.multiple||(t.disableDeselect=!0),t.selected&&r(this.selectedValues,t)})},setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())},deselectSiblingItems(t){this.items.forEach(i=>{i.value!==t.value&&(i.toggleSelected(!1),this.selectedValues.has(i.value)&&this.selectedValues.delete(i.value))})},selectSiblings(t){if(!this.lastSelectedItem)return;const{items:i}=this,s=i.findIndex(t=>t.value===this.lastSelectedItem.value),e=i.findIndex(i=>i.value===t.value);i.slice(Math.min(s,e),Math.max(s,e)).forEach(t=>{t.toggleSelected(!0),r(this.selectedValues,t)})},handleFilter(t){const i=t.detail.map(t=>t.value);this.items.forEach(t=>{t.hidden=-1===i.indexOf(t.value)})},getItemData(){const t=[];return this.items.forEach(i=>{const s={};s.label=i.textLabel||i.textHeading,s.description=i.textDescription,s.metadata=i.metadata,s.value=i.value,t.push(s)}),t}};const h=a=>{var{props:r,text:l}=a,h=function(t,i){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(s[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(t);a<e.length;a++)i.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(s[e[a]]=t[e[a]])}return s}(a,["props","text"]);const{disabled:n,loading:c,filterEnabled:o,dataForFilter:d,handleFilter:f}=r,{filterPlaceholder:b}=l;return t(i,Object.assign({"aria-disabled":n.toString(),"aria-busy":c.toString()},h),t("header",{class:{[e.sticky]:!0}},o?t("calcite-filter",{data:d,textPlaceholder:b,"aria-label":b,onCalciteFilterChange:f}):null,t("slot",{name:"menu-actions"})),t("slot",null),((i,e)=>t(s,{loading:i,disabled:e}))(c,n))};export{h as L,l as s};