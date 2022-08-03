import { Flex, Heading, Text } from '@chakra-ui/react';

interface IApplicationStatusMessage {
    title: string;
    description: string;
}

export const ApplicationStatusMessage = ({ title, description }: IApplicationStatusMessage) => (
    <Flex
        direction="column"
        alignItems="center"
        marginBottom="3rem"
    >
        <Heading
            textAlign="center"
            marginBottom="2rem"
            size="lg"
        >
            {title}
        </Heading>

        <Text color="#4F5665">{description}</Text>
    </Flex>
);
