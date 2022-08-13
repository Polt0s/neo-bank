import { Footer } from 'components';
import { HeaderContainer } from 'containers';

import { ERouterName } from './Router';

interface IPageProps {
    routesPaths: Record<string, string>;
    className: string;
}

export const PageHOC = (Page: ({ routesPaths, className }: IPageProps) => JSX.Element) => {
    return (
        <>
            <HeaderContainer routesPaths={ERouterName} />
            <Page routesPaths={ERouterName} className="Grid-layout__content" />
            <Footer />
        </>
    );
};
