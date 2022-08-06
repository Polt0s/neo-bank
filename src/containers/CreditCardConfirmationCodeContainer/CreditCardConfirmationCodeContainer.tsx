import { useMutation } from '@tanstack/react-query';
import { Center, Spinner } from '@chakra-ui/react';

import { CreditCardConfirmationCode } from 'components';
import { documentAPI } from 'api';
import { applicationIdStorage, stepApplicationStorage } from 'localStorage';
import { applicationStore } from 'store/application.store';

export const CreditCardConfirmationCodeContainer = () => {
    const { mutate, isLoading, isError } = useMutation((code: string) =>
        documentAPI.postDocumentSignCode({ applicationId: Number(applicationIdStorage.getItem()), code: code }), {
        onSuccess: () => {
            stepApplicationStorage.setItem('FIRST');
            applicationStore.getStatusApplication('FIRST');
        }
    });

    const onSubmit = (code: string) => {
        mutate(code);
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
                <CreditCardConfirmationCode onSubmitCode={onSubmit} isError={isError} />
            )}
        </>
    );
};
