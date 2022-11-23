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
    NotFoundPage,
    PaymentSchedulePage
} from 'pages';
import { appConfigStore } from 'store/appConfig.store';
import { applicationStore } from 'store/application.store';
import { applicationIdStorage } from 'localStorage';

import { PageHOC } from './PageHOC';

export enum ERouterName {
    Home = '/',
    Account = '/account',
    CreditCard = '/credit-card',
    Loan = '/loan',
    Product = '/product',
    Resource = '/resource',
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

            {(applicationStore.application.step === 'THIRD' || applicationStore.application.step === 'FOURTH') && (
                <>
                    <Route
                        path={`${ERouterName.Loan}/${applicationIdStorage.getItem()}`}
                        element={PageHOC(FormApplicationScoringPage)}
                    />
                    <Route path={`${ERouterName.Loan}/*`} element={<Navigate replace to={ERouterName.Loan} />} />
                </>
            )}

            {(applicationStore.application.step === 'FOURTH' || applicationStore.application.step === 'FIFTH') && (
                <>
                    <Route
                        path={`${ERouterName.Loan}/${applicationIdStorage.getItem()}/document`}
                        element={PageHOC(PaymentSchedulePage)}
                    />
                    <Route path={`${ERouterName.Loan}/*`} element={<Navigate replace to={ERouterName.Loan} />} />
                </>
            )}

            {(applicationStore.application.step === 'FIFTH' || applicationStore.application.step === 'SIXTH') && (
                <>
                    <Route
                        path={`${ERouterName.Loan}/${applicationIdStorage.getItem()}/document/sign`}
                        element={PageHOC(CreditCardDocumentSignUpPage)}
                    />
                    <Route path={`${ERouterName.Loan}/*`} element={<Navigate replace to={ERouterName.Loan} />} />
                </>
            )}

            {(applicationStore.application.step === 'SIXTH' || applicationStore.application.step === 'FIRST') && (
                <>
                    <Route
                        path={`${ERouterName.Loan}/${applicationIdStorage.getItem()}/code`}
                        element={PageHOC(CreditCardConfirmationCodePage)}
                    />
                    <Route path={`${ERouterName.Loan}/*`} element={<Navigate replace to={ERouterName.Loan} />} />
                </>
            )}

            <Route path={ERouterName.Product} element={<></>} />
            <Route path={ERouterName.Account} element={<></>} />
            <Route path={ERouterName.Resource} element={<></>} />
            <Route path={ERouterName.NotFound} element={PageHOC(NotFoundPage)} />
            <Route path="*" element={<Navigate replace to={ERouterName.NotFound} />} />
        </Routes>
    );
});
