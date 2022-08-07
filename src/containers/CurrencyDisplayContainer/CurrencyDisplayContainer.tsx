import { CurrencyDisplay } from 'components';
import { useCurrencies } from 'hooks';

const dataCurrency = [
    { from: 'USD', to: 'RUB', index: 1 },
    { from: 'EUR', to: 'RUB', index: 2 },
    { from: 'CNY', to: 'RUB', index: 3 },
    { from: 'JPY', to: 'RUB', index: 4 },
    { from: 'CHF', to: 'RUB', index: 5 },
    { from: 'TRY', to: 'RUB', index: 6 }
];

export const CurrencyDisplayContainer = () => {
    const { currencyList } = useCurrencies(dataCurrency, 900000);

    return (
        <CurrencyDisplay currencyList={currencyList} />
    );
};
