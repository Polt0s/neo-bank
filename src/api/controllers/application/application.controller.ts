import { Controller } from '../config';

import type {
    IPostApplicationApplyRequest,
    IPostApplicationRegistrationRequest,
    IPostApplicationRequest,
    TPostApplicationId
} from './request.types';
import type { IPostApplicationResponse } from './response.types';

class ApplicationController extends Controller {
    public constructor() {
        super({
            requestUrl: 'application'
        });
    }

    public async postApplication({ items }: IPostApplicationRequest) {
        return this.post<IPostApplicationResponse[]>(undefined, { ...items });
    }

    public async postApplicationApply({ items }: IPostApplicationApplyRequest) {
        return this.post('/apply', { ...items });
    }

    public async putApplicationRegistration({ items, applicationId }: IPostApplicationRegistrationRequest) {
        return this.put(`/registration/${applicationId}`, { ...items });
    }

    public async postApplicationDeny({applicationId}: TPostApplicationId) {
        return this.post(`/${applicationId}/deny`);
    }
}

export const applicationAPI = new ApplicationController();
