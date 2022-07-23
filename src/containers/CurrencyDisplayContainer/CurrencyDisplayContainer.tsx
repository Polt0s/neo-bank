import { Divider, Flex, Heading, Text, Link, Container, Box } from '@chakra-ui/react';
import { CurrencyDisplay } from 'components';
import { useCurrencies } from 'hooks';
import { Card } from 'shared';

const dataCurrency = [
    { from: 'USD', to: 'RUB', index: 1 },
    { from: 'EUR', to: 'RUB', index: 2 }
];

export const CurrencyDisplayContainer = () => {
    // const { currencyList, isLoading } = useCurrencies(dataCurrency);

    // console.log(currencyList);

    return (
        <CurrencyDisplay currencyList={[]} />
    );
};
