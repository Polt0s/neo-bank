import { LocalStorage } from './localStorage';

class StepPrescoring extends LocalStorage {
    public constructor() {
        super({
            storageKey: 'step_prescoring'
        });
    }
}

export const stepPrescoringStorage = new StepPrescoring();
