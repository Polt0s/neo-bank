import React from 'react';
import { observer } from 'mobx-react';

import {
    ApplicationStatusMessage,
    BannerCard,
    BenefitsCard,
    CardIconSteps
} from 'components';
import { applicationStore } from 'store/application.store';
import {
    FormApplicationPrescoringStepContainer,
    LoanOffersContainer
} from 'containers';

import cardImage1 from 'assets/image/cardImage1.jpg';

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

export const CreditCardPage = observer(({ routesPaths }: ICreditCardPage) => {
    const refTest = React.useRef<HTMLDivElement>(null);

    const handleClickLinkButton = () => {
        if (refTest.current) {
            refTest.current.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
        }
    };

    const configRenderComponents = {
        FIRST: <FormApplicationPrescoringStepContainer routesPaths={routesPaths} refLink={refTest} />,
        SECOND: <LoanOffersContainer />,
        THIRD: <ApplicationStatusMessage
            title={'The preliminary decision has been \n sent to your email.'}
            description="In the letter you can get acquainted with the preliminary decision on the credit card."
        />
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

            {configRenderComponents[applicationStore.application.step]}
        </main>
    );
});
