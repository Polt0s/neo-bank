import React from 'react';

import type { TDataPayment } from 'components';

type TKeys = keyof TDataPayment;
type TDirection = 'ascending' | 'descending';
export type TNewObject = {
    direction: TDirection;
    key: TKeys
}

export const useSortableData = (items: TDataPayment[], object: TNewObject) => {
    const [sortData, setSortData] = React.useState(object);

    const onSortedArray = React.useCallback((array: TDataPayment[], { key, direction }: TNewObject) => {
        return array.sort((a, b) => {
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            return 0;
        });
    }, []);

    const getSortedItems = React.useMemo(() => {
        if (!sortData) {
            return items;
        }

        return onSortedArray(items, { ...sortData });
    }, [items, onSortedArray, sortData]);

    const handleSort = (key: TKeys) => {
        let direction: TDirection = 'descending';

        if (sortData && sortData.key === key && sortData.direction === 'descending') {
            direction = 'ascending';
        }

        setSortData({ key, direction });
    };

    return { data: getSortedItems, handleSort, sortData };
};
