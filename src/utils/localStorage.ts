function supportsLocalStorage(): boolean {
  return typeof Storage !== "undefined";
}

export function getItem(id: string): string | null {
  if (!id || !supportsLocalStorage()) {
    return null;
  }
  return localStorage.getItem(id);
}

export function setItem(id: string, value: string): void {
  if (!id || !supportsLocalStorage()) {
    return;
  }

  localStorage.setItem(id, value);
}

export default {
  getItem,
  setItem
};
