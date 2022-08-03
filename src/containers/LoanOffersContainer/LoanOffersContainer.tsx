import { useMutation } from '@tanstack/react-query';
import { Center, Spinner } from '@chakra-ui/react';

import { applicationAPI } from 'api';
import { LoanOffers } from 'components';
import { applicationStore } from 'store/application.store';

import type { IPostApplicationApplyRequest } from 'api';

export const LoanOffersContainer = () => {
    const { loanOffers } = applicationStore.application;

    const { mutate, isLoading } = useMutation((values: IPostApplicationApplyRequest) =>
        applicationAPI.postApplicationApply(values), {
        onSuccess: () => {
            applicationStore.getStatusApplication('THIRD');
        }
    });

    const onSubmitOffer = (applicationId: string) => {
        const getSelectOffer = applicationStore.findCurrentApplicationId(applicationId);

        mutate({ items: getSelectOffer });
    };

    return (
        <>
            {isLoading ? (
                <Center>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="#b4387a"
                        size="xl"
                    />
                </Center>
            ) : (
                <LoanOffers data={loanOffers} onSubmitOffer={onSubmitOffer} />
            )}
        </>
    );
};
