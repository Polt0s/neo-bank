import { makeAutoObservable } from 'mobx';

class AppConfigStore {
    appConfig = {
        currentLocation: '',
    };

    constructor() {
        makeAutoObservable(this);
    }

    getCurrentLocation(pathname: string) {
        this.appConfig.currentLocation = pathname;
        return this.appConfig;
    }
}

export const appConfigStore = new AppConfigStore();
