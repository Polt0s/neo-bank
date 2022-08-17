import { makeAutoObservable } from 'mobx';

interface IAppConfigStore {
    currentLocation: string;
}

class AppConfigStore {
    appConfig: IAppConfigStore = {
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
