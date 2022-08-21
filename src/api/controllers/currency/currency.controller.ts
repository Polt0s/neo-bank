import { Controller } from '../config';

import type { IGetCurrencyRequest } from './request.types';

class CurrencyController extends Controller {
    constructor() {
        super({
            requestUrl: 'exchange',
        });
    }

    public async getCurrency({ ...params }: IGetCurrencyRequest) {
        return this.get<number>('rapidAPI', undefined, { params });
    }
}

export const currencyAPI = new CurrencyController();
