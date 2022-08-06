import { makeAutoObservable } from 'mobx';

import { uniqueId } from 'utils';
import { stepApplicationStorage, viewLoanOffers } from 'localStorage';

import type { IPostApplicationResponse } from 'api';

interface IApplicationStore {
    loanOffers: IPostApplicationResponse[];
    step: TStatus | string;
}

class ApplicationStore {
    application: IApplicationStore = {
        loanOffers: viewLoanOffers.getItemAsJson() || [],
        step: stepApplicationStorage.getItem() || 'FIRST',
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

export type TStatus = 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH' | 'FIFTH' | 'SIXTH';
