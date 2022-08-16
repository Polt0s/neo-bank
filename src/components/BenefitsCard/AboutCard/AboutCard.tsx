import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { Card } from 'shared';
import { uniqueId } from 'utils';

import styles from './About.module.css';

interface IAboutCard {
    items: TDataAboutCard[];
}

export const AboutCard = ({ items }: IAboutCard) => (
    <Box padding="3rem 0">
        <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={10}
        >
            {items.map(({ Icon, title, description }, index: number) => (
                <GridItem
                    key={uniqueId()}
                    rowSpan={1}
                    colSpan={index > 2 ? 3 : 2}
                    className={styles['Grid-item']}
                >
                    <Card className={styles['Grid-item__card']} background={index % 2 !== 0 ? 'gray' : 'lightGray'}>
                        <>
                            <Icon />
                            <Heading size="lg">{title}</Heading>
                            <Text>{description}</Text>
                        </>
                    </Card>
                </GridItem>
            ))}

        </Grid>
    </Box>
);

export type TDataAboutCard = {
    Icon: () => JSX.Element;
    title: string;
    description: string;
}
