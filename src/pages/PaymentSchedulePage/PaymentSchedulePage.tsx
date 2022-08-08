import { Flex } from '@chakra-ui/react';

import { PaymentScheduleContainer } from 'containers';

interface IPaymentSchedulePage {
    className: string;
}

export const PaymentSchedulePage = ({ className }: IPaymentSchedulePage) => {
    return (
        <main className={className}>
            <Flex
                height="100%"
                justifyContent="center"
                alignItems="center"
            >
                <PaymentScheduleContainer />
            </Flex >
        </main>
    );
};
