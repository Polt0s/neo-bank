import React from 'react';

import { BannerCard, BenefitsCard, CardIconSteps } from 'components';

import cardImage1 from 'assets/image/cardImage1.jpg';

import { FormApplicationPrescoringStepContainer } from 'containers';

import {
    tabsBenefitsCard,
    dataParamsCard,
    dataAboutCredit,
    dataRatesAndConditions,
    dataCashbackCard,
    dataFAQCard,
    dataCardIconSteps
} from './data';

interface ICreditCardPage {
    routesPaths: Record<string, string>;
}

export const CreditCardPage = ({ routesPaths }: ICreditCardPage) => {
    const refTest = React.useRef<HTMLDivElement>(null);

    const handleClickLinkButton = () => {
        if (refTest.current) {
            refTest.current.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
        }
    };

    return (
        <main>
            <BannerCard
                title="Platinum digital credit card"
                description="Our best credit card. Suitable for everyday spending and shopping.
                Cash withdrawals and transfers without commission and interest."
                dataParamsCard={dataParamsCard}
                imageCard={cardImage1}
                background="brown"
                handleClickLinkButton={handleClickLinkButton}
            />

            <BenefitsCard
                tabs={tabsBenefitsCard}
                dataAboutCard={dataAboutCredit}
                dataRatesAndConditions={dataRatesAndConditions}
                dataCashbackCard={dataCashbackCard}
                dataFAQCard={dataFAQCard}
            />

            <CardIconSteps items={dataCardIconSteps} />

            <FormApplicationPrescoringStepContainer routesPaths={routesPaths} refLink={refTest} />
        </main>
    );
};
