import React from 'react';
import {
    Box,
    Checkbox,
    Flex,
    Heading,
    Link,
    Text
} from '@chakra-ui/react';

import { Button, PDFIcon } from 'shared';

import document from 'assets/documents/credit-card-offer.pdf';

interface ICreditCardDocumentSignUp {
    onSubmit: () => void;
}

export const CreditCardDocumentSignUp = ({ onSubmit }: ICreditCardDocumentSignUp) => {
    const [isCheckAgree, setIsCheckAgree] = React.useState(false);

    return (
        <Box margin="5rem 0">
            <Flex
                alignItems="center"
                marginBottom="2rem"
                gap={20}
            >
                <Heading size="lg">Signing of documents</Heading>
                <Text>Step 4 of 5</Text>
            </Flex>

            <Text
                color="#4F5665"
                marginBottom="2rem"
                fontSize="1.25rem"
            >
                Information on interest rates under bank deposit agreements with individuals.
                Center for Corporate Information Disclosure. Information of a professional participant in the securities market.
                Information about persons under whose control or significant influence the Partner Banks are.
                By leaving an application, you agree to the processing of personal data, obtaining information,
                obtaining access to a credit history, using an analogue of a handwritten signature, an offer,
                a policy regarding the processing of personal data, a form of consent to the processing of personal data.
            </Text>

            <Flex alignItems="center" marginBottom="2rem">
                <PDFIcon />
                <Link
                    href={document}
                    target="_blank"
                    rel="noopener noreferrer"
                    fontSize="1.25rem"
                >
                    Information on your card
                </Link>
            </Flex>

            <Flex justifyContent="flex-end" gap={20}>
                <Checkbox
                    defaultChecked size="lg"
                    isChecked={isCheckAgree}
                    onChange={() => setIsCheckAgree(!isCheckAgree)}>
                    I agree
                </Checkbox>
                <Button
                    disabled={!isCheckAgree}
                    background="blue"
                    colorText="white"
                    width="10rem"
                    onClick={() => onSubmit()}
                >
                    Send
                </Button>
            </Flex>
        </Box>
    );
};
