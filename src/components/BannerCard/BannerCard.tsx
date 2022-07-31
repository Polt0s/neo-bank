import { Flex, Heading, Text, Box, Tooltip } from '@chakra-ui/react';

import { Button, Card } from 'shared';

import styles from './BannerCard.module.css';

interface IBannerCard {
    title: string;
    background?: 'gray' | 'brown';
    imageCard: string;
    description: string;
    dataParamsCard: TDataParamsCard[];
    idLink?: string;
}

export const BannerCard = ({
    title,
    background,
    imageCard,
    description,
    dataParamsCard,
    idLink,
}: IBannerCard) => {
    return (
        <Card background={background} className={styles['Banner-card']}>
            <Flex>
                <Box w="50%">
                    <Heading color="white" size="2xl" marginBottom="2rem">
                        {title}
                    </Heading>

                    <Text color="gray.700" marginBottom="2rem" w="80%">
                        {description}
                    </Text>

                    <Flex gap={20} marginBottom="2rem">
                        {dataParamsCard.map((item, index) => (
                            <Flex direction="column" gap={2} key={index}>
                                <Heading color="white" size="md">{item.title}</Heading>
                                <Tooltip className={styles['Banner-card__tooltip']} label={item.tooltip} aria-label="tooltip">
                                    <Text className={styles['Banner-card__text-description']} color="white">{item.description}</Text>
                                </Tooltip>
                            </Flex>
                        ))}
                    </Flex>

                    <Button background="blue" colorText="white" width="10rem">Apply for card</Button>
                </Box>

                <Box w="50%">
                    <Flex h="100%" justifyContent="center" alignItems="center">
                        <img
                            src={imageCard}
                            width="350px"
                            alt={imageCard}
                            className={styles['Banner-card__image']}
                        />
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
};

type TDataParamsCard = {
    title: string;
    description: string;
    tooltip: string;
}
