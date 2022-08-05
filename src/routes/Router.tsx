import React from 'react';
import {
    Routes,
    Route,
    Navigate,
    useLocation
} from 'react-router-dom';
import { observer } from 'mobx-react';

import {
    CreditCardConfirmationCodePage,
    CreditCardDocumentSignUpPage,
    CreditCardPage,
    FormApplicationScoringPage,
    HomePage,
    NotFoundPage
} from 'pages';
import { appConfigStore } from 'store/appConfig.store';

import { PageHOC } from './PageHOC';

export enum ERouterName {
    Home = '/',
    Account = '/account',
    CreditCard = '/credit-card',
    Loan = '/loan',
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
            <Route path={ERouterName.Loan} element={PageHOC(CreditCardPage)} />
            <Route path={`${ERouterName.Loan}/:applicationId`} element={PageHOC(FormApplicationScoringPage)} />
            <Route path={`${ERouterName.Loan}/:applicationId/document/sign`} element={PageHOC(CreditCardDocumentSignUpPage)} />
            <Route path={`${ERouterName.Loan}/:applicationId/code`} element={PageHOC(CreditCardConfirmationCodePage)} />
            <Route path={ERouterName.Product} element={<></>} />
            <Route path={ERouterName.Account} element={<></>} />
            <Route path={ERouterName.NotFound} element={PageHOC(NotFoundPage)} />

            <Route path="*" element={<Navigate replace to={ERouterName.NotFound} />} />
        </Routes>
    );
});
