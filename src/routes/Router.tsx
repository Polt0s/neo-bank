import { Routes, Route, Navigate } from 'react-router-dom';
import { CreditCardPage, HomePage } from 'pages';

import { PageHOC } from './PageHOC';

export enum ERouterName {
    Home = '/',
    Account = '/account',
    CreditCard = '/credit-card',
    Product = '/product',
    NotFound = '/not-found'
}

export const Router = () => {
    return (
        <Routes>
            <Route path={ERouterName.Home} element={PageHOC(HomePage)} />
            <Route path={ERouterName.CreditCard} element={PageHOC(CreditCardPage)} />
            <Route path={ERouterName.Product} element={<></>} />
            <Route path={ERouterName.Account} element={<></>} />

            <Route path="*" element={<Navigate replace to={ERouterName.Home} />} />
        </Routes>
    );
};
