const get = (type: 'localStorage' | 'sessionStorage', key: string) => {
    if (typeof window?.[type] !== 'undefined') {
        try {
            return window?.[type].getItem(key);
        } catch {}
    }
};

const set = (type: 'localStorage' | 'sessionStorage', key: string, value: string) => {
    if (typeof window?.[type] !== 'undefined') {
        try {
            return window?.[type].setItem(key, value);
        } catch {}
    }
};

export const browserStore = {
    get,
    set,
};
