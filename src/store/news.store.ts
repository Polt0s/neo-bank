import { makeAutoObservable } from 'mobx';

import { checkAnchorTag } from 'utils';

import type { TDataNews } from 'components/SliderNews';

interface INewsStore {
    dataNews: TDataNews[];
}

class NewsStore {
    store: INewsStore = {
        dataNews: [],
    };

    constructor() {
        makeAutoObservable(this);
    }

    getNews(data: TDataNews[]) {
        const filter = data.filter((item) => !checkAnchorTag(item.description))
            .filter((item) => item.urlToImage !== null);

        this.store.dataNews = filter;
        return this.store;
    }

}

export const newsStore = new NewsStore();
