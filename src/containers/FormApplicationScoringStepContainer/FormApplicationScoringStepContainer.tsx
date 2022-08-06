import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { observer } from 'mobx-react';
import { Center, Spinner } from '@chakra-ui/react';

import { adminAPI, applicationAPI } from 'api';
import { ApplicationStatusMessage, FormApplicationScoringStep } from 'components';
import { applicationIdStorage, stepApplicationStorage } from 'localStorage';
import { applicationStore } from 'store/application.store';

import type { IPostApplicationRegistrationRequest } from 'api';
import type { NavigateFunction } from 'react-router-dom';

interface IFormApplicationScoringStepContainer {
    navigate: NavigateFunction;
    routesPaths: Record<string, string>;
}

export const FormApplicationScoringStepContainer = observer(({
    navigate,
    routesPaths
}: IFormApplicationScoringStepContainer) => {
    const [statusApplication, setStatusApplication] = React.useState('');

    const { mutate, isLoading } = useMutation((values: IPostApplicationRegistrationRequest) =>
        applicationAPI.putApplicationRegistration(values), {
        onSuccess: () => {
            stepApplicationStorage.setItem('FOURTH');
            applicationStore.getStatusApplication('FOURTH');

            setTimeout(() => {
                adminAPI.getAdminId({ applicationId: Number(applicationIdStorage.getItem()) }).then((response) => {
                    setStatusApplication(response.data.status);
                });
            }, 10000);
        }
    });

    React.useEffect(() => {
        if (statusApplication === 'CC_DENIED') {
            stepApplicationStorage.removeItem();
            applicationIdStorage.removeItem();
            applicationStore.getStatusApplication('FIRST');

            navigate(routesPaths['Home']);
        }
    }, [navigate, routesPaths, statusApplication]);

    const onSubmit = (values: Omit<IPostApplicationRegistrationRequest, 'applicationId'>) => {
        mutate({ ...values, applicationId: Number(applicationIdStorage.getItem()) });
    };

    const configRender: Record<string, JSX.Element | string> = {
        THIRD: (
            <FormApplicationScoringStep onSubmit={onSubmit} />
        ),
        FOURTH: (
            <ApplicationStatusMessage
                title="Wait for a decision on the application"
                description="The answer will come to your mail within 10 minutes"
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
});
