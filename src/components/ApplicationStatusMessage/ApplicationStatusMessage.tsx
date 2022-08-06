import { Flex, Heading, Text } from '@chakra-ui/react';

import styles from './ApplicationStatusMessage.module.css';

interface IApplicationStatusMessage {
    title: string;
    description: string;
    border?: boolean;
    margin?: boolean;
}

export const ApplicationStatusMessage = ({
    title,
    description,
    border,
    margin
}: IApplicationStatusMessage) => (
    <Flex
        direction="column"
        alignItems="center"
        marginBottom={margin ? '3rem' : '0'}
        className={border ? styles['Block-message'] : ''}
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
