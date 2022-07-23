import { useNavigate } from 'react-router-dom';

import { Header } from 'components';

interface IHeaderContainer {
    routesPaths: Record<string, string>;
}

export const HeaderContainer = ({ routesPaths }: IHeaderContainer) => {
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate(routesPaths.Home);
    };

    return (
        <>
            <Header routesPaths={routesPaths} goBackHome={goBackHome} />
        </>
    );
};
