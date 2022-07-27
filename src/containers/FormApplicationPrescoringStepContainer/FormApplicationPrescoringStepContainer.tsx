import { useMutation } from '@tanstack/react-query';

import { applicationAPI } from 'api';
import { FormApplicationPrescoringStep } from 'components';

import type { IPostApplicationRequest } from 'api/controllers/application/response.types';

interface IFormApplicationPrescoringStepContainer {
    routesPaths: Record<string, string>;
}

export const FormApplicationPrescoringStepContainer = ({ routesPaths }: IFormApplicationPrescoringStepContainer) => {
    const { mutate } = useMutation((values: IPostApplicationRequest) => applicationAPI.postApplication(values));

    const onSubmit = (values: IPostApplicationRequest) => {
        mutate(values);
    };

    return (
        <>
            <FormApplicationPrescoringStep onSubmit={onSubmit} routesPaths={routesPaths} />
        </>
    );
};
