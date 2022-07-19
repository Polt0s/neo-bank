import { Flex, Text, Heading } from '@chakra-ui/react';
import featureManImage from 'assets/image/featureManImage.png';
import { CompleteIcon } from 'shared';

const featuresList: string[] = [
    'Powerfull online protection.',
    'Cashback without borders.',
    'Personal design',
    'Work anywhere in the world'
];

export const ListCardFeatures = () => {
    return (
        <Flex justifyContent="space-between" marginBottom={'7rem'}>
            <img src={featureManImage} width={500} height={400} alt={featureManImage} />

            <Flex direction="column" justifyContent="center">
                <Heading marginBottom={'1.25rem'}>We Provide Many Features You Can Use</Heading>
                <Text fontSize="1xl" color="#4F5665" marginBottom={'1.25rem'}>
                    You can explore the features that we provide with fun and have their own functions each feature.
                </Text>

                <Flex direction="column">
                    {featuresList.map((item, index) => (
                        <Flex key={index} gap={4} marginBottom={'1rem'}>
                            <CompleteIcon />
                            <Text color="#4F5665">{item}</Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};

