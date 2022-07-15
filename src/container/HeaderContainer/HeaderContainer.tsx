import { Header } from 'components';

interface IHeaderContainer {
    routesPaths: Record<string, string>;
}

export const HeaderContainer = ({ routesPaths }: IHeaderContainer) => {
    return (
        <>
            <Header routesPaths={routesPaths} />
        </>
    );
};
