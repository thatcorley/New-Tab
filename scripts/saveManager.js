const STORAGE_PREFIX = "CORLEY-TAB_";

const saveManager = {
    get(key, fallback = null) {
        try {
            const rawData = localStorage.getItem(STORAGE_PREFIX+key);
            if (raw == null) return fallback;
            return JSON.parse(raw);
        } catch(e) {
            console.warn('saveManager failed to read "${key}"', e);
            return fallback;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(STORAGE_PREFIX+key, JSON.stringify(value));
            return true;
        } catch(e) {
            console.warn('saveManager failed to set "${key}"', e)
            return false;
        }
    },

    remove(key) {
        localStorage.removeItem(STORAGE_PREFIX+key)
    }
}

export default saveManager