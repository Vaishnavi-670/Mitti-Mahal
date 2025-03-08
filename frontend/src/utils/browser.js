export const isBrowser = () => typeof window !== 'undefined';

export const getWindowLocation = () => {
  if (!isBrowser()) {
    return { search: '' };
  }
  return window.location;
};

export const getDocument = () => {
  if (!isBrowser()) {
    return {};
  }
  return document;
};

export const safeSessionStorage = {
  getItem: (key) => {
    if (!isBrowser()) return null;
    return sessionStorage.getItem(key);
  },
  setItem: (key, value) => {
    if (!isBrowser()) return;
    sessionStorage.setItem(key, value);
  },
  removeItem: (key) => {
    if (!isBrowser()) return;
    sessionStorage.removeItem(key);
  }
};
