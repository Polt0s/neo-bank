import {
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    Link,
    Text
} from '@chakra-ui/react';

import { BankIcon, Card } from 'shared';

import type { TCurrencyList } from 'hooks';

interface ICurrencyDisplay {
    currencyList: TCurrencyList[];
}

export const CurrencyDisplay = ({ currencyList }: ICurrencyDisplay) => {
    const currentDate = new Date();
    const [data] = currentDate.toLocaleString().split(',');

    return (
        <Card background="platinum">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="lg">Exchange rate in internet bank</Heading>
                <Text>{`Update every 15 minutes, MSC ${data}`}</Text>
            </Flex>

            <Divider color="white" size="20px" margin="1rem 0" />

            <Heading size="md" marginBottom="1rem">Currency</Heading>
            <Divider color="white" size="20px" margin="1rem 0" width="15%" />

            <Flex justifyContent="space-between" marginBottom="2rem" alignItems="center">
                <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(12, 1fr)" gap="2rem">
                    {currencyList.map((item) => (
                        <GridItem key={item.name} colSpan={4}>
                            <Flex gap={5}>
                                <Heading size="md" color="gray">{item.name}:</Heading>
                                <Heading size="md" color="#2f2222">{(item.value).toFixed(2)}</Heading>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>

                <BankIcon />
            </Flex>
            <Link color="white">All courses</Link>
        </Card>
    );
};
