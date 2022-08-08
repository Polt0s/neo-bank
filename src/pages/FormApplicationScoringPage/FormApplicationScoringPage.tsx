import { useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

import { FormApplicationScoringStepContainer } from 'containers';

interface IFormApplicationScoringPage {
    routesPaths: Record<string, string>;
    className: string;
}

export const FormApplicationScoringPage = ({ routesPaths, className }: IFormApplicationScoringPage) => {
    const navigate = useNavigate();

    return (
        <main className={className}>
            <Flex
                height="100%"
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <FormApplicationScoringStepContainer
                    navigate={navigate}
                    routesPaths={routesPaths}
                />
            </Flex>
        </main>
    );
};
