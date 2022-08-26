import React from 'react';

import { Footer } from 'components';
import { HeaderContainer } from 'containers';
import { ThemeContext } from 'context';

import { ERouterName } from './Router';

interface IPageProps {
    routesPaths: Record<string, string>;
    className: string;
}

export const PageHOC = (Page: ({ routesPaths, className }: IPageProps) => JSX.Element) => {
    const { stateTheme } = React.useContext(ThemeContext);

    return (
        <div className="Grid-layout" style={{ background: stateTheme.background }}>
            <HeaderContainer routesPaths={ERouterName} />
            <Page routesPaths={ERouterName} className="Grid-layout__content" />
            <Footer />
        </div>
    );
};
