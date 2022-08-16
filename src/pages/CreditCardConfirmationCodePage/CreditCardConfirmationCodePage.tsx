import { Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { ApplicationStatusMessage } from 'components';
import { CreditCardConfirmationCodeContainer } from 'containers';
import { applicationStore } from 'store/application.store';
import { Button } from 'shared';
import { applicationIdStorage } from 'localStorage';

import SurpriseImage from 'assets/image/SurpriseImage.png';

interface ICreditCardConfirmationCodePage {
    routesPaths: Record<string, string>;
    className: string;
}

export const CreditCardConfirmationCodePage = ({ routesPaths, className }: ICreditCardConfirmationCodePage) => {
    const navigate = useNavigate();

    const onGoBackButton = () => {
        applicationIdStorage.removeItem();
        navigate(routesPaths['Home']);
    };

    return (
        <main className={className}>
            {applicationStore.application.step === 'FIRST' ? (
                <Flex
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    gap={10}
                >
                    <Image
                        src={SurpriseImage}
                        alt={SurpriseImage}
                        width={150}
                        height={150}
                    />

                    <ApplicationStatusMessage
                        title="Congratulations! You have completed your new credit card."
                        description="Your credit card will arrive soon. Thank you for choosing us!"
                    />
                    <Button
                        background="blue"
                        colorText="white"
                        onClick={onGoBackButton}
                    >
                        View other offers of our bank
                    </Button>
                </Flex>
            ) : (
                <CreditCardConfirmationCodeContainer />
            )}
        </main>
    );
};
