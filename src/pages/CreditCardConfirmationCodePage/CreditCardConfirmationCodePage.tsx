import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { ApplicationStatusMessage } from 'components';
import { CreditCardConfirmationCodeContainer } from 'containers';
import { applicationStore } from 'store/application.store';
import { Button } from 'shared';

import SurpriseImage from 'assets/image/SurpriseImage.png';

interface ICreditCardConfirmationCodePage {
    routesPaths: Record<string, string>;
}

export const CreditCardConfirmationCodePage = ({ routesPaths }: ICreditCardConfirmationCodePage) => {
    const navigate = useNavigate();

    const onGoBackButton = () => {
        navigate(routesPaths['Home']);
    };

    return (
        <>
            {applicationStore.application.step === 'FIRST' ? (
                <Flex
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    gap={10}
                >
                    <img src={SurpriseImage} alt={SurpriseImage} width="150px" height="150px" />

                    <ApplicationStatusMessage
                        title="Congratulations! You have completed the checkout."
                        description="Your credit card will arrive soon"
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
        </>
    );
};
