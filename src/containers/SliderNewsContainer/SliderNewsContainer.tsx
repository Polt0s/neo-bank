import { useQuery } from '@tanstack/react-query';
import { observer } from 'mobx-react';
import { Skeleton, Stack } from '@chakra-ui/react';

import { newsAPI } from 'api';
import { SliderNews } from 'components';

import { newsStore } from 'store/news.store';

export const SliderNewsContainer = observer(() => {
    const { isLoading } = useQuery(['news'], () => newsAPI.getNews({ country: 'us', category: 'business' }), {
        onSuccess: (response) => {
            newsStore.getNews(response.data.articles);
        }
    });

    return (
        <>
            {isLoading ? (
                <Stack>
                    <Skeleton height="30rem" />
                </Stack>
            ) : (
                <SliderNews data={newsStore.store.dataNews} />
            )}
        </>
    );
});
