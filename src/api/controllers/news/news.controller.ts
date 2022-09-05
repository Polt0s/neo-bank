import { Controller } from '../config';

import type { IGetNewsRequest } from './request.types';
import type { INewsResponse } from './response.types';

const KEY = process.env.REACT_APP_NEWSAPI_KEY;

class NewsController extends Controller {
    constructor() {
        super({
            requestUrl: 'top-headlines',
        });
    }

    public async getNews({ country, category }: IGetNewsRequest) {
        return this.get<INewsResponse>('newsAPI', `?country=${country}&category=${category}&apiKey=${KEY}`,);
    }
}

export const newsAPI = new NewsController();
