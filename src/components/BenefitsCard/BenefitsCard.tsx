import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';

import { AboutCard } from './AboutCard';
import { RatesAndConditions } from './RatesAndConditions';
import { CashbackCard } from './CashbackCard';
import { FAQCard } from './FAQCard';

import type { TDataAboutCard } from './AboutCard';
import type { TDataRatesAndConditions } from './RatesAndConditions';
import type { TDataCashbackCard } from './CashbackCard';
import type { TDataFAQCard } from './FAQCard';

import styles from './BenefitsCard.module.css';

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

    return (
        <Tabs colorScheme="default" color="#7b7454" marginBottom="3rem">
            <TabList>
                {tabs.map((tab, index) => (
                    <Tab key={index} className={styles['BenefitsCard__tab']}>{tab}</Tab>
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
