import { LocalStorage } from './localStorage';


class ViewLoanOffers extends LocalStorage {
    constructor() {
        super({
            storageKey: 'view_loan_offers'
        });
    }
}

export const viewLoanOffers = new ViewLoanOffers();
