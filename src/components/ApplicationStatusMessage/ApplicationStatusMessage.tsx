import React from 'react';
import {
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';

import { ThemeContext } from 'context';

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
}: IApplicationStatusMessage) => {
    const { stateTheme } = React.useContext(ThemeContext);

    return (
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
                color={stateTheme.color}
            >
                {title}
            </Heading>

            <Text color={stateTheme.secondaryColor}>{description}</Text>
        </Flex>
    );
};