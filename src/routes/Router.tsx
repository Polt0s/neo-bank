import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { CreditCardPage, HomePage } from 'pages';

import { observer } from 'mobx-react';
import { appConfigStore } from 'store/appConfig.store';

import React from 'react';

import { PageHOC } from './PageHOC';

export enum ERouterName {
    Home = '/',
    Account = '/account',
    CreditCard = '/credit-card',
    Product = '/product',
    NotFound = '/not-found'
}

export const Router = observer(() => {
    const location = useLocation();

    React.useEffect(() => {
        appConfigStore.getCurrentLocation(location.pathname);
    }, [location.pathname]);

    return (
        <Routes>
            <Route path={ERouterName.Home} element={PageHOC(HomePage)} />
            <Route path={ERouterName.CreditCard} element={PageHOC(CreditCardPage)} />
            <Route path={ERouterName.Product} element={<></>} />
            <Route path={ERouterName.Account} element={<></>} />

            <Route path="*" element={<Navigate replace to={ERouterName.Home} />} />
        </Routes>
    );
});
