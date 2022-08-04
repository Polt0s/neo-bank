interface ILocalStorage {
    storageKey: string;
}

export class LocalStorage {
    private readonly _storageKey: string;

    protected constructor({ storageKey }: ILocalStorage) {
        this._storageKey = storageKey;
    }

    public getItem() {
        return localStorage.getItem(this._storageKey);
    }

    public setItem(value: string) {
        return localStorage.setItem(this._storageKey, value);
    }

    public removeItem() {
        return localStorage.removeItem(this._storageKey);
    }

    public setItemAsJson<T = Record<string, unknown>>(value: T) {
        this.setItem(JSON.stringify(value));
    }

    public getItemAsJson<T = Record<string, unknown>>(): T | null {
        const value = this.getItem();

        if (!value) {
            return null;
        } else {
            return JSON.parse(value);
        }
    }
}
