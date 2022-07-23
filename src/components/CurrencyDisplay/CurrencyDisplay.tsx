import {
    Box,
    Container,
    Divider,
    Flex,
    Heading,
    Link,
    Text
} from '@chakra-ui/react';

import type { TCurrencyList } from 'hooks';

import { Card } from 'shared';

interface ICurrencyDisplay {
    currencyList: TCurrencyList[];
}

export const CurrencyDisplay = ({ currencyList }: ICurrencyDisplay) => {
    return (
        <Card background="gray">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="lg">Exchange rate in internet bank</Heading>

                <Text>Operate с 00:00 МСК 23.07.2022</Text>
            </Flex>

            <Divider color="white" size="20px" margin="1rem 0" />

            <Heading size="md" marginBottom="1rem">Currency</Heading>
            <Divider color="white" size="20px" margin="1rem 0" width="15%" />

            <Container margin={0} padding={0}>
                {currencyList.map((item) => (
                    <Box key={item.name} margin="1rem 0">
                        <Flex gap={20}>
                            <Heading size="md" color="gray">{item.name}</Heading>
                            <Heading size="md" color="white">{(item.value).toFixed(2)}</Heading>
                        </Flex>
                    </Box>
                ))}
            </Container>
            <Link color="white">All courses</Link>
        </Card>
    );
};
