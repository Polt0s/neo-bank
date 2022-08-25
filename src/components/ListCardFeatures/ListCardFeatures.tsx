import React from 'react';
import {
    Flex,
    Text,
    Heading,
    Image
} from '@chakra-ui/react';

import { CompleteIcon } from 'shared';
import { uniqueId } from 'utils';
import { ThemeContext } from 'context';

import featureManImage from 'assets/image/featureManImage.png';

const featuresList: string[] = [
    'Powerfull online protection.',
    'Cashback without borders.',
    'Personal design',
    'Work anywhere in the world'
];

export const ListCardFeatures = () => {
    const { stateTheme } = React.useContext(ThemeContext);

    return (
        <Flex justifyContent="space-between" marginBottom={'7rem'}>
            <Image
                src={featureManImage}
                width={500}
                height={400}
                alt={featureManImage}
            />

            <Flex direction="column" justifyContent="center">
                <Heading marginBottom="1.25rem" color={stateTheme.color}>We Provide Many Features You Can Use</Heading>
                <Text
                    fontSize="1xl"
                    color={stateTheme.secondaryColor}
                    marginBottom="1.25rem">
                    You can explore the features that we provide with fun and have their own functions each feature.
                </Text>

                <Flex direction="column">
                    {featuresList.map((item) => (
                        <Flex
                            key={uniqueId()}
                            gap={4}
                            marginBottom={'1rem'}
                        >
                            <CompleteIcon />
                            <Text color={stateTheme.secondaryColor}>{item}</Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};

