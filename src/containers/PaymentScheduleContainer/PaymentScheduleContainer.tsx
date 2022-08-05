import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';

import { adminAPI, documentAPI } from 'api';
import { PaymentSchedule } from 'components';
import { applicationIdStorage, stepApplicationStorage } from 'localStorage';
import { applicationStore } from 'store/application.store';

import type { TDataPayment } from 'components/PaymentSchedule';

export const PaymentScheduleContainer = () => {
    const [dataPaymentSchedule, setDataPaymentSchedule] = React.useState<TDataPayment[]>([]);

    const { mutate, isLoading } = useMutation(() =>
        documentAPI.postDocument({ applicationId: Number(applicationIdStorage.getItem()) }), {
        onSuccess: () => {
            stepApplicationStorage.setItem('SIXTH');
            applicationStore.getStatusApplication('SIXTH');
        }
    });

    const { isError } = useQuery(['admin'], () =>
        adminAPI.getAdminId({ applicationId: Number(applicationIdStorage.getItem()) }), {
        onSuccess: (response) => {
            setDataPaymentSchedule(response.data.credit.paymentSchedule);
        }
    });

    const onSubmit = () => {
        mutate();
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
                <PaymentSchedule
                    onSubmit={onSubmit}
                    dataPaymentSchedule={dataPaymentSchedule}
                    isError={isError}
                />
            )}
        </>
    );
};
