import React from 'react';
import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';

import { uniqueId } from 'utils';
import { ThemeContext } from 'context';

import { AboutCard } from './AboutCard';
import { RatesAndConditions } from './RatesAndConditions';
import { CashbackCard } from './CashbackCard';
import { FAQCard } from './FAQCard';

import styles from './BenefitsCard.module.css';

import type { TDataAboutCard } from './AboutCard';
import type { TDataRatesAndConditions } from './RatesAndConditions';
import type { TDataCashbackCard } from './CashbackCard';
import type { TDataFAQCard } from './FAQCard';

interface IBenefitsCard {
    tabs: string[];
    dataAboutCard: TDataAboutCard[];
    dataRatesAndConditions: TDataRatesAndConditions[];
    dataCashbackCard: TDataCashbackCard[];
    dataFAQCard: TDataFAQCard[];
}

export const BenefitsCard = ({
    tabs,
    dataAboutCard,
    dataRatesAndConditions,
    dataCashbackCard,
    dataFAQCard
}: IBenefitsCard) => {
    const { stateTheme } = React.useContext(ThemeContext);

    return (
        <Tabs
            colorScheme="default"
            marginBottom="3rem"
            borderColor={stateTheme.tabColor.divider}

        >
            <TabList>
                {tabs.map((tab) => (
                    <Tab
                        key={uniqueId()}
                        color={stateTheme.tabColor.text}
                        className={styles['BenefitsCard__tab']}
                    >
                        {tab}
                    </Tab>
                ))}
            </TabList>

            <TabPanels>
                <TabPanel padding={0}>
                    <AboutCard items={dataAboutCard} />
                </TabPanel>

                <TabPanel padding={0}>
                    <RatesAndConditions items={dataRatesAndConditions} />
                </TabPanel>

                <TabPanel padding={0}>
                    <CashbackCard items={dataCashbackCard} />
                </TabPanel>

                <TabPanel padding={0}>
                    <FAQCard items={dataFAQCard} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
