import { Routes, Route, Navigate } from 'react-router-dom';
import { CreditPage, HomePage } from 'pages';

import { PageHOC } from './PageHOC';

export enum ERouterName {
    Home = '/',
    Account = '/account',
    Credit = '/credit',
    Product = '/product',
    NotFound = '/not-found'
}

export const Router = () => {
    return (
        <Routes>
            <Route path={ERouterName.Home} element={PageHOC(HomePage)} />
            <Route path={ERouterName.Credit} element={PageHOC(CreditPage)} />
            <Route path={ERouterName.Product} element={<></>} />
            <Route path={ERouterName.Account} element={<></>} />

            <Route path="*" element={<Navigate replace to={ERouterName.Home} />} />
        </Routes>
    );
};
