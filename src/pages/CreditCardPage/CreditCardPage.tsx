import React from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

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
import { applicationIdStorage } from 'localStorage';

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
    className: string;
}

export const CreditCardPage = observer(({ routesPaths, className }: ICreditCardPage) => {
    const refPrescoringContainer = React.useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleClickLinkButton = () => {
        if (refPrescoringContainer.current) {
            refPrescoringContainer.current.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
        }
    };

    const handleClickContinue = (path: string) => {
        navigate(`${routesPaths['Loan']}/${path}`);
    };

    const renderLinkButton: Record<string, () => void> = {
        FIRST: handleClickLinkButton,
        SECOND: handleClickLinkButton,
        THIRD: () => handleClickContinue(`${applicationIdStorage.getItem()}`),
        FOURTH: () => handleClickContinue(`${applicationIdStorage.getItem()}/document`),
        FIFTH: () => handleClickContinue(`${applicationIdStorage.getItem()}/document/sign`),
        SIXTH: () => handleClickContinue(`${applicationIdStorage.getItem()}/code`),
    };

    const renderTextButton: Record<string, string> = {
        FIRST: 'Apply for card',
        SECOND: 'Choose an offer',
        THIRD: 'Continue registration',
        FOURTH: 'Continue registration',
        FIFTH: 'Continue registration',
        SIXTH: 'Continue registration',
    };

    const configRenderComponents: Record<string, JSX.Element | string> = {
        FIRST: <FormApplicationPrescoringStepContainer />,
        SECOND: <LoanOffersContainer />,
        THIRD: <ApplicationStatusMessage
            title={'The preliminary decision has been \n sent to your email.'}
            description="In the letter you can get acquainted with the preliminary decision on the credit card."
            border={true}
            margin={true}
        />,
        FOURTH: '',
        FIFTH: '',
        SIXTH: '',
    };

    return (
        <main className={className}>
            <BannerCard
                title="Platinum digital credit card"
                description="Our best credit card. Suitable for everyday spending and shopping.
                Cash withdrawals and transfers without commission and interest."
                dataParamsCard={dataParamsCard}
                imageCard={cardImage1}
                background="multi"
                handleClickLinkButton={renderLinkButton[applicationStore.application.step]}
                textButton={renderTextButton[applicationStore.application.step]}
            />

            <BenefitsCard
                tabs={tabsBenefitsCard}
                dataAboutCard={dataAboutCredit}
                dataRatesAndConditions={dataRatesAndConditions}
                dataCashbackCard={dataCashbackCard}
                dataFAQCard={dataFAQCard}
            />

            <CardIconSteps items={dataCardIconSteps} />

            <Box ref={refPrescoringContainer}>
                {configRenderComponents[applicationStore.application.step]}
            </Box>
        </main>
    );
});
