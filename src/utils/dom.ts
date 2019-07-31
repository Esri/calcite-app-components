export type CalciteTheme = "light" | "dark";

export function getTheme(el: HTMLElement): CalciteTheme {
  return (el.closest("[theme='dark']") && "dark") || "light";
}
