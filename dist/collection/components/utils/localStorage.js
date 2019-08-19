function supportsLocalStorage() {
    return typeof Storage !== "undefined";
}
export function getItem(id) {
    if (!id || !supportsLocalStorage()) {
        return null;
    }
    return localStorage.getItem(id);
}
export function setItem(id, value) {
    if (!id || !supportsLocalStorage()) {
        return;
    }
    localStorage.setItem(id, value);
}
export function removeItem(id) {
    if (!id || !supportsLocalStorage()) {
        return;
    }
    localStorage.removeItem(id);
}
