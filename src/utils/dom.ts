export function getElementTheme(el: HTMLElement): string {
  const closestEl = el.closest("[theme]");
  return (closestEl && closestEl.getAttribute("theme")) || "light";
}
