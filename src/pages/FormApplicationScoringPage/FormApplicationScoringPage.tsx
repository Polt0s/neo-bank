import { useNavigate } from 'react-router-dom';

import { FormApplicationScoringStepContainer } from 'containers';

interface IFormApplicationScoringPage {
    routesPaths: Record<string, string>;
}

export const FormApplicationScoringPage = ({ routesPaths }: IFormApplicationScoringPage) => {
    const navigate = useNavigate();

    return (
        <main>
            <FormApplicationScoringStepContainer
                navigate={navigate}
                routesPaths={routesPaths}
            />
        </main>
    );
};
