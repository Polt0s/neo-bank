import { LocalStorage } from './localStorage';

class ApplicationId extends LocalStorage {
    public constructor() {
        super({
            storageKey: 'application_id'
        });
    }
}

export const applicationIdStorage = new ApplicationId();
