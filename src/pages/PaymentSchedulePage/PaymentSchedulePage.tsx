import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { PaymentScheduleContainer } from 'containers';

interface IPaymentSchedulePage {
    className: string;
    routesPaths: Record<string, string>;
}

export const PaymentSchedulePage = ({ className, routesPaths }: IPaymentSchedulePage) => {
    const navigate = useNavigate();

    return (
        <main className={className}>
            <Flex
                height="100%"
                justifyContent="center"
                alignItems="center"
            >
                <PaymentScheduleContainer routesPaths={routesPaths} navigate={navigate} />
            </Flex >
        </main>
    );
};
