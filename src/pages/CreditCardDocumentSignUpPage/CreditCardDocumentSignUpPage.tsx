import { Flex } from '@chakra-ui/react';

import { CreditCardDocumentSignUpContainer } from 'containers';

interface ICreditCardDocumentSignUpPage {
    className: string;
}

export const CreditCardDocumentSignUpPage = ({ className }: ICreditCardDocumentSignUpPage) => {
    return (
        <main className={className}>
            <Flex
                height="100%"
                justifyContent="center"
                alignItems="center"
            >
                <CreditCardDocumentSignUpContainer />
            </Flex>
        </main>
    );
};
