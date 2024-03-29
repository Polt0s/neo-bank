import React from 'react';
import {
    Box,
    Center,
    Divider,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';

import { uniqueId } from 'utils';
import { ThemeContext } from 'context';

import styles from './CardIconSteps.module.css';

interface ICardIconSteps {
    items: TDataCardIconSteps[];
}

export const CardIconSteps = ({ items }: ICardIconSteps) => {
    const { stateTheme } = React.useContext(ThemeContext);

    return (
        <Box marginBottom="3rem">
            <Center marginBottom="1rem">
                <Heading size="lg" color={stateTheme.color}>How to get a card</Heading>
            </Center>

            <Flex gap={20}>
                {items.map((item) => (
                    <Flex
                        key={uniqueId()}
                        flexDirection="column"
                        gap={5}
                    >
                        <Flex gap={5} alignItems="center">
                            <div className={styles['Block-round']}>
                                <Heading size="md">{item.step}</Heading>
                            </div>
                            <Divider width="100%" borderBottomWidth="2px" />
                        </Flex>

                        <Text className={styles['Text']} color={stateTheme.secondaryColor}>
                            {item.description}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export type TDataCardIconSteps = {
    step: string;
    description: string;
}
