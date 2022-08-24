import { LocalStorage } from './localStorage';

class ColorMode extends LocalStorage {
    constructor() {
        super({
            storageKey: 'color_mode'
        });
    }
}

export const themeColorMode = new ColorMode();
