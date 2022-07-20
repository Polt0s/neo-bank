import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import axiosBase from './axios.base';

interface IProps {
    requestUrl?: string;
}

export abstract class Controller {
    private readonly _requestUrl: IProps['requestUrl'];

    protected constructor({ requestUrl }: IProps) {
        this._requestUrl = requestUrl;
    }

    protected get<T>(path?: string, config?: IRequestConfig) {
        const request = () => {
            return axiosBase.get<T>(
                this.processPath(path),
                config
            );
        };

        return this.processRequest(request);
    }

    protected post<T>(path?: string, data?: unknown, config?: IRequestConfig) {
        const request = () => {
            return axiosBase.post<T>(
                this.processPath(path),
                data,
                config
            );
        };

        return this.processRequest(request);
    }

    protected put<T>(path?: string, data?: unknown, config?: IRequestConfig) {
        const request = () => {
            return axiosBase.put<T>(
                this.processPath(path),
                data,
                config
            );
        };

        return this.processRequest(request);
    }

    protected delete<T>(path?: string, config?: IRequestConfig) {
        const request = () => {
            return axiosBase.delete<T>(
                this.processPath(path),
                config
            );
        };

        return this.processRequest(request);
    }

    private processRequest<T>(request: () => Promise<AxiosResponse<T>>) {
        if (!this._requestUrl) {
            throw new Error('Expected request url is absent');
        }

        return request();
    }

    private processPath(path?: string) {
        return `${this._requestUrl}${path || ''}`;
    }
}

export interface IRequestConfig extends AxiosRequestConfig {
    access_token: string | null;
}
