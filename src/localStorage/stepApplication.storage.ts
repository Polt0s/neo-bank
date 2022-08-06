import { LocalStorage } from './localStorage';

class StepApplication extends LocalStorage {
    public constructor() {
        super({
            storageKey: 'step_application'
        });
    }
}

export const stepApplicationStorage = new StepApplication();
