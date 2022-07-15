import { HeaderContainer } from 'container';

import { ROUTER_NAMES } from './Router';

interface IPageProps {
    routesPaths: Record<string, string>;
}

export const PageHOC = (Page: ({ routesPaths }: IPageProps) => JSX.Element) => {
    return (
        <>
            <HeaderContainer routesPaths={ROUTER_NAMES} />
            <Page routesPaths={ROUTER_NAMES} />

            {/* footer container */}
        </>
    );
};
