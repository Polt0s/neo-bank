import { useQuery, useMutation } from '@tanstack/react-query';

import { applicationAPI } from 'api';
import { FormApplication } from 'components';

import type { IPostApplicationRequest } from 'api/controllers/application/response.types';

interface IFormApplicationContainer {
    routesPaths: Record<string, string>;
}

export const FormApplicationContainer = ({ routesPaths }: IFormApplicationContainer) => {
    const { mutate } = useMutation((values: IPostApplicationRequest) => applicationAPI.postApplication(values));

    const onSubmit = (values: IPostApplicationRequest) => {
        mutate(values);
    };

    return (
        <>
            <FormApplication onSubmit={onSubmit} routesPaths={routesPaths} />
        </>
    );
};
