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
        return this.get<IGetAdminResponse>('application');
    }

    public async getAdminId({ id }: IGetAdminIdRequest) {
        return this.get<IGetAdminResponse>(`application/${id}`);
    }
}

export const adminAPI = new AdminController();
