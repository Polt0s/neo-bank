import { Routes, Route, Navigate } from 'react-router-dom';
import { CreditPage, HomePage } from 'pages';

export enum ROUTER_NAMES {
    Home = '/',
    Account = '/account',
    Credit = '/credit',
    Product = '/product',
    NotFound = '/not-found'
}

export const Router = () => {
    return (
        <Routes>
            <Route path={ROUTER_NAMES.Home} element={<HomePage />} />
            <Route path={ROUTER_NAMES.Credit} element={<CreditPage />} />
            <Route path={ROUTER_NAMES.Product} element={<></>} />
            <Route path={ROUTER_NAMES.Account} element={<></>} />

            <Route path="*" element={<Navigate replace to={ROUTER_NAMES.Home} />} />
        </Routes>
    );
};
