import { Box, Checkbox, Flex, Link, Text } from '@chakra-ui/react';
import { Button, PDFIcon } from 'shared';
import document from 'assets/documents/credit-card-offer.pdf';

export const CreditCardDocumentSignUp = () => {
    return (
        <Box margin="5rem 0">
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
                <Checkbox defaultChecked size="lg">I agree</Checkbox>
                <Button
                    background="blue"
                    colorText="white"
                    width="10rem"
                >
                    Send
                </Button>
            </Flex>
        </Box>
    );
};
