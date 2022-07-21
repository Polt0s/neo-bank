import { Controller } from '../config';

import type { IPostApplicationRequest } from './response.types';

class ApplicationController extends Controller {
    public constructor() {
        super({
            requestUrl: 'application'
        });
    }

    public async postApplication({ items }: IPostApplicationRequest) {
        return this.post(undefined, { ...items });
    }
}

export const applicationAPI = new ApplicationController();
