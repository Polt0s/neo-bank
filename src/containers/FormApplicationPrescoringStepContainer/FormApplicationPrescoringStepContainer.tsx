import { useMutation } from '@tanstack/react-query';
import { Center, Spinner } from '@chakra-ui/react';

import { applicationAPI } from 'api';
import { FormApplicationPrescoringStep } from 'components';
import { applicationStore } from 'store/application.store';
import { stepApplicationStorage, viewLoanOffers } from 'localStorage';

import type { IPostApplicationRequest } from 'api';

export const FormApplicationPrescoringStepContainer = () => {
    const { mutate, isLoading } = useMutation((values: IPostApplicationRequest) => applicationAPI.postApplication(values), {
        onSuccess: (response) => {
            applicationStore.getLoanOffers(response.data);
            viewLoanOffers.setItemAsJson(applicationStore.application.loanOffers);
            applicationStore.getStatusApplication('SECOND');
            stepApplicationStorage.setItem('SECOND');
        }
    });

    const onSubmit = (values: IPostApplicationRequest) => {
        mutate(values);
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
                <FormApplicationPrescoringStep onSubmit={onSubmit} />
            )}
        </>
    );
};
