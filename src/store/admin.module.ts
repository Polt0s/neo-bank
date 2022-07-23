import { makeAutoObservable } from 'mobx';

import type { IGetAdminResponse } from 'api';

class AdminStore {
    application = {};

    constructor() {
        makeAutoObservable(this);
    }

    getApplication(data: IGetAdminResponse) {
        this.application = data;
        return this.application;
    }
}

export const adminStore = new AdminStore();
