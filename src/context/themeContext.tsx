import React from 'react';

import { themeColorMode } from 'localStorage';

import type { Dispatch, SetStateAction } from 'react';

type TColorMode = {
    background: string;
    color: string;
}

type TThemeConfig = {
    lightColorMode: TColorMode;
    darkColorMode: TColorMode;
}

const themeConfig: TThemeConfig = {
    lightColorMode: {
        background: '#f5f4ff',
        color: '#1C1C1E',
    },
    darkColorMode: {
        background: '#545456',
        color: '#FFFFFF',
    },
};

interface IThemeContext {
    stateTheme: TColorMode
    setStateTheme: Dispatch<SetStateAction<TColorMode>>;
}

const currentThemeStorage = themeColorMode.getItem() as unknown as 'lightColorMode' | 'darkColorMode';

const ThemeContext = React.createContext<IThemeContext>({
    stateTheme: themeConfig.lightColorMode,
    setStateTheme: () => { }
});

type TThemeContextProvider = {
    children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: TThemeContextProvider) => {
    const [stateTheme, setStateTheme] = React.useState<TColorMode>(themeConfig[currentThemeStorage] || themeConfig.lightColorMode);

    return (
        <ThemeContext.Provider value={{ stateTheme, setStateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { themeConfig, ThemeContext, ThemeContextProvider };
export type { TThemeConfig, TColorMode };
