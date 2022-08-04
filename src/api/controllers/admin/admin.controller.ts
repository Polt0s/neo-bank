import { Controller } from '../config';

import type { IGetAdminIdRequest } from './request.types';
import type { IGetAdminResponse } from './response.types';

class AdminController extends Controller {
    public constructor() {
        super({
            requestUrl: 'admin/'
        });
    }

    public async getAdmin() {
        return this.get<IGetAdminResponse>('base', 'application');
    }

    public async getAdminId({ applicationId }: IGetAdminIdRequest) {
        return this.get<IGetAdminResponse>('base', `application/${applicationId}`);
    }
}

export const adminAPI = new AdminController();
