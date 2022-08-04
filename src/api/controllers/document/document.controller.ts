import { Controller } from '../config';

import type { IPostDocumentRequest, IPostDocumentCodeRequest } from './request.types';

class Document extends Controller {
    public constructor() {
        super({
            requestUrl: 'document'
        });
    }

    public async postDocument({ applicationId }: IPostDocumentRequest) {
        return this.post<void>(`/${applicationId}`);
    }

    public async postDocumentSign({ applicationId }: IPostDocumentRequest) {
        return this.post<void>(`/${applicationId}/sign`);
    }

    public async postDocumentSignCode({ applicationId, code }: IPostDocumentCodeRequest) {
        return this.post<void>(`/${applicationId}/sign/code`, code);
    }
}

export const documentAPI = new Document();
