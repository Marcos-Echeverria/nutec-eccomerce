export const saveToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to local storage', error);
    }
};
  
export const getFromLocalStorage = (key) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error getting from local storage', error);
        return null;
    }
};
  
export const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing from local storage', error);
    }
};
  