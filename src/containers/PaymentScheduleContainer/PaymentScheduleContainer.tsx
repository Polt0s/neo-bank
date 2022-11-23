import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';

import { adminAPI, applicationAPI, documentAPI } from 'api';
import { ApplicationStatusMessage, PaymentSchedule } from 'components';
import { applicationIdStorage, stepApplicationStorage } from 'localStorage';
import { applicationStore } from 'store/application.store';

import type { TDataPayment } from 'components/PaymentSchedule';
import type { NavigateFunction } from 'react-router';

interface IPaymentScheduleContainer {
    navigate: NavigateFunction;
    routesPaths: Record<string, string>;
}

export const PaymentScheduleContainer = ({ navigate, routesPaths }: IPaymentScheduleContainer) => {
    const [dataPaymentSchedule, setDataPaymentSchedule] = React.useState<TDataPayment[]>([]);
    const [isStatusDeny, setIsStatusDeny] = React.useState<boolean>(false);

    const { mutate, isLoading } = useMutation(() =>
        documentAPI.postDocument({ applicationId: Number(applicationIdStorage.getItem()) }), {
        onSuccess: () => {
            stepApplicationStorage.setItem('FIFTH');
            applicationStore.getStatusApplication('FIFTH');
        }
    });

    const postApplicationDeny = useMutation(() =>
        applicationAPI.postApplicationDeny({ applicationId: Number(applicationIdStorage.getItem()) }), {
        onSuccess: () => {
            setIsStatusDeny(true);
        }
    });

    const { isError, status } = useQuery(['admin'], () =>
        adminAPI.getAdminId({ applicationId: Number(applicationIdStorage.getItem()) }), {
        onSuccess: (response) => {
            setDataPaymentSchedule(response.data.credit.paymentSchedule);
        }
    });

    const onClickGoHome = () => {
        stepApplicationStorage.removeItem();
        applicationIdStorage.removeItem();
        applicationStore.getStatusApplication('FIRST');
        navigate(routesPaths['Home']);
    };

    const onSubmit = () => {
        mutate();
    };

    const onSubmitDenyApplication = () => {
        postApplicationDeny.mutate();
    };

    const configRender: Record<string, JSX.Element | string> = {
        FOURTH: (
            <PaymentSchedule
                onSubmit={onSubmit}
                dataPaymentSchedule={dataPaymentSchedule}
                isError={isError}
                onSubmitDenyApplication={onSubmitDenyApplication}
                isLoadingForStatusDeny={postApplicationDeny.isLoading}
                isStatusDeny={isStatusDeny}
                onClickGoHome={onClickGoHome}
            />
        ),
        FIFTH: (
            <ApplicationStatusMessage
                title="Documents are formed"
                description="Documents for signing will be sent to your email"
            />
        )
    };

    return (
        <>
            {(isLoading || status === 'loading') ? (
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
