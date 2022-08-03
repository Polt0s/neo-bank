import { makeAutoObservable } from 'mobx';

import type { IPostApplicationResponse } from 'api/controllers/application/response.types';
import { uniqueId } from 'utils/uniqueId';

interface IApplicationStore {
    loanOffers: IPostApplicationResponse[];
    step: TStatus;
}

class ApplicationStore {
    application: IApplicationStore = {
        loanOffers: [],
        step: 'FIRST',
    };

    constructor() {
        makeAutoObservable(this);
    }

    getLoanOffers(data: IPostApplicationResponse[]) {
        const addedUniqueId = data.map((item) => ({ ...item, uniqueId: uniqueId() }));

        this.application.loanOffers = addedUniqueId;
        return this.application;
    }

    getStatusApplication(status: TStatus) {
        this.application.step = status;
        return this.application;
    }

    findCurrentApplicationId(id: string) {
        const getCurrentOffer = this.application.loanOffers.filter((item) => item.uniqueId === id);
        const [result] = getCurrentOffer;
        delete result.uniqueId;

        return result;
    }
}

export const applicationStore = new ApplicationStore();

export type TStatus = 'FIRST' | 'SECOND' | 'THIRD';
