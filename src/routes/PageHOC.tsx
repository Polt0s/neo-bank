import React from 'react';
import { Progress } from '@chakra-ui/react';

import { Footer } from 'components';
import { HeaderContainer } from 'containers';
import { ThemeContext } from 'context';
import { applicationStore } from 'store/application.store';

import { ERouterName } from './Router';

import type { TStatus } from 'store/application.store';

interface IPageProps {
    routesPaths: Record<string, string>;
    className: string;
}

export const PageHOC = (Page: ({ routesPaths, className }: IPageProps) => JSX.Element) => {
    const { stateTheme } = React.useContext(ThemeContext);

    const objStep: Record<TStatus, number> = {
        'FIRST': 0,
        'SECOND': 20,
        'THIRD': 40,
        'FOURTH': 60,
        'FIFTH': 80,
        'SIXTH': 100
    };
    const currentStep = applicationStore.application.step as TStatus;

    return (
        <div className="Grid-layout" style={{ background: stateTheme.background }}>
            <HeaderContainer routesPaths={ERouterName} />
            <Page routesPaths={ERouterName} className="Grid-layout__content" />
            {applicationStore.application.step !== 'FIRST' && (
                <Progress
                    position="sticky"
                    bottom={0}
                    color="#003CFF"
                    size="md"
                    value={objStep[currentStep]}
                />
            )}
            <Footer />
        </div>
    );
};
