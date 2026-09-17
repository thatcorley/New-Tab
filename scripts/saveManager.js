const STORAGE_PREFIX = "CORLEY-TAB_";

const saveManager = {
    get(key, fallback = null) {
        try {
            const rawData = localStorage.getItem(STORAGE_PREFIX+key);
            if (rawData == null) return fallback;
            return JSON.parse(rawData);
        } catch(e) {
            console.warn(`saveManager failed to read "${STORAGE_PREFIX+key}"`, e);
            return fallback;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(STORAGE_PREFIX+key, JSON.stringify(value));
            return true;
        } catch(e) {
            console.warn(`saveManager failed to set "${STORAGE_PREFIX+key}"`, e)
            return false;
        }
    },

    remove(key) {
        localStorage.removeItem(STORAGE_PREFIX+key)
    }
}

export default saveManager