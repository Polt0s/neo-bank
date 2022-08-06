import { Center, Spinner } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { documentAPI } from 'api';
import { ApplicationStatusMessage, CreditCardDocumentSignUp } from 'components';
import { applicationIdStorage, stepApplicationStorage } from 'localStorage';
import { applicationStore } from 'store/application.store';

export const CreditCardDocumentSignUpContainer = () => {
    const { mutate, isLoading } = useMutation(() =>
        documentAPI.postDocumentSign({ applicationId: Number(applicationIdStorage.getItem()) }), {
        onSuccess: () => {
            stepApplicationStorage.setItem('SIXTH');
            applicationStore.getStatusApplication('SIXTH');
        }
    });

    const onSubmit = () => {
        mutate();
    };

    const configRender: Record<string, JSX.Element | string> = {
        FIFTH: (
            <CreditCardDocumentSignUp onSubmit={onSubmit} />
        ),
        SIXTH: (
            <ApplicationStatusMessage
                title="Documents have been successfully signed and sent for approval"
                description="Within 10 minutes you will be sent a PIN code to your email for confirmation"
            />
        )
    };

    return (
        <>
            {isLoading ? (
                <Center height="10rem">
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="#b4387a"
                        size="xl"
                    />
                </Center>
            ) : (
                <>
                    {configRender[applicationStore.application.step]}
                </>
            )}
        </>
    );
};
