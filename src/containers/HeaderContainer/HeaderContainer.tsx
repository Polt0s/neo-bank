import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from 'components';
import { themeConfig, ThemeContext } from 'context';
import { themeColorMode } from 'localStorage';

interface IHeaderContainer {
    routesPaths: Record<string, string>;
}

export const HeaderContainer = ({ routesPaths }: IHeaderContainer) => {
    const [currentColorMode, setCurrentColorMode] = React.useState<'lightColorMode' | 'darkColorMode'>('lightColorMode' || themeColorMode);

    const navigate = useNavigate();
    const { stateTheme, setStateTheme } = React.useContext(ThemeContext);

    const goBackHome = () => {
        navigate(routesPaths['Home']);
    };

    const toggleTheme = () => {
        if (stateTheme === themeConfig.darkColorMode) {
            setStateTheme(themeConfig.lightColorMode);
            themeColorMode.setItem('lightColorMode');
            setCurrentColorMode('lightColorMode');
        } else {
            setStateTheme(themeConfig.darkColorMode);
            themeColorMode.setItem('darkColorMode');
            setCurrentColorMode('darkColorMode');
        }
    };

    return (
        <>
            <Header
                routesPaths={routesPaths}
                goBackHome={goBackHome}
                toggleTheme={toggleTheme}
                stateTheme={stateTheme}
                currentColorMode={currentColorMode}
            />
        </>
    );
};
