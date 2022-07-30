import { Box, Text, Heading, Grid, GridItem } from '@chakra-ui/react';

import { Card } from 'shared';

import styles from './CashbackCard.module.css';

interface ICashbackCard {
    items: TDataCashbackCard[];
}

export const CashbackCard = ({ items }: ICashbackCard) => (
    <Box padding="2rem 0">
        <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={10}
        >
            {items.map((item, index) => (
                <GridItem key={index} colSpan={4} rowSpan={1} className={styles['Grid-item']}>
                    <Card className={styles['Grid-item__card']} background={index % 2 === 0 ? 'lightGray' : 'ultramarine'}>
                        <Text className={styles['Grid-item__text']}>{item.description}</Text>
                        <Heading>{item.sum}</Heading>
                    </Card>
                </GridItem>
            ))}
        </Grid>
    </Box>
);

export type TDataCashbackCard = {
    description: string;
    sum: string;
}
