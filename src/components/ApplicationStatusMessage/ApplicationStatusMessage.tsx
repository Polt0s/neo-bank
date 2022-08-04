import { Flex, Heading, Text } from '@chakra-ui/react';

import styles from './ApplicationStatusMessage.module.css';

interface IApplicationStatusMessage {
    title: string;
    description: string;
    border?: boolean;
}

export const ApplicationStatusMessage = ({ title, description, border }: IApplicationStatusMessage) => (
    <Flex
        direction="column"
        alignItems="center"
        marginBottom="3rem"
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
