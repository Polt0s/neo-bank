import { HeaderContainer } from 'containers';

import { ERouterName } from './Router';

interface IPageProps {
    routesPaths: Record<string, string>;
}

export const PageHOC = (Page: ({ routesPaths }: IPageProps) => JSX.Element) => {
    return (
        <>
            <HeaderContainer routesPaths={ERouterName} />
            <Page routesPaths={ERouterName} />
        </>
    );
};
