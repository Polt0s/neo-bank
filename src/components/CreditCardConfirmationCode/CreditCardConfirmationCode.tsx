import React from 'react';
import {
    Text,
    Flex,
    Heading,
    HStack,
    PinInput,
    PinInputField
} from '@chakra-ui/react';

interface ICreditCardConfirmationCode {
    onSubmitCode: (code: string) => void;
    isError: boolean;
}

export const CreditCardConfirmationCode = ({ onSubmitCode, isError }: ICreditCardConfirmationCode) => {
    const [valueCode, setValueCode] = React.useState<string>('');

    React.useEffect(() => {
        if (valueCode.length === 4) {
            onSubmitCode(valueCode);
        }

    }, [onSubmitCode, valueCode]);

    return (
        <Flex
            height="20rem"
            maxWidth="60ch"
            margin="0 auto"
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={10}
        >
            <Heading size="lg">Please enter confirmation code</Heading>
            <Flex
                direction="column"
                gap={2}
                alignItems="center"
            >
                <HStack>
                    <PinInput
                        value={valueCode}
                        size="lg"
                        onChange={(value: string) => setValueCode(value)}
                    >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>

                {isError && (
                    <Text color="#FF5631">Invalid confirmation code</Text>
                )}
            </Flex>
        </Flex>
    );
};
