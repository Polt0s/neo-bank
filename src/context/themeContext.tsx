import React from 'react';

import { themeColorMode } from 'localStorage';

import type { Dispatch, SetStateAction } from 'react';

type TColorMode = {
    background: string;
    color: string;
    secondaryColor: string;
    cardBackground: 'default' | 'brown';
    tabColor: {
        text: string;
        divider: string;
    };
    errorColor: string;
}

type TThemeConfig = {
    lightColorMode: TColorMode;
    darkColorMode: TColorMode;
}

const themeConfig: TThemeConfig = {
    lightColorMode: {
        background: '#f5f4ff',
        color: '#1C1C1E',
        secondaryColor: '#4F5665',
        cardBackground: 'default',
        tabColor: {
            text: '#7b7454',
            divider: '#E2E8F0'
        },
        errorColor: '#FF5631'
    },
    darkColorMode: {
        background: '#545456',
        color: '#bfeeff',
        secondaryColor: '#e9e9e9',
        cardBackground: 'brown',
        tabColor: {
            text: '#FFFFFF',
            divider: '#7f92aca8'
        },
        errorColor: '#ff9d88',
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

export {
    themeConfig,
    ThemeContext,
    ThemeContextProvider,
    currentThemeStorage
};
export type { TThemeConfig, TColorMode };
