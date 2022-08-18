import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Text
} from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom';

import { Button } from 'shared';
import { ListCardFeatures, SubscribeNews } from 'components';
import { CurrencyDisplayContainer, SliderNewsContainer } from 'containers';

import cardImage1 from 'assets/image/cardImage1.jpg';
import cardImage2 from 'assets/image/cardImage2.jpg';
import cardImage3 from 'assets/image/cardImage3.jpg';
import cardImage4 from 'assets/image/cardImage4.jpg';
import globalMapImage from 'assets/image/GlobalMap.png';

interface IHomePage {
    routesPaths: Record<string, string>;
    className: string;
}

export const HomePage = ({ routesPaths, className }: IHomePage) => {
    const navigate = useNavigate();

    return (
        <main className={className}>
            <Flex style={{ margin: '7rem 0' }} justifyContent="space-between">
                <Container margin={0} padding={0}>
                    <Heading
                        size="lg"
                        fontSize="48px"
                        marginBottom="4rem"
                    >
                        Choose the design you like and apply for card right now
                    </Heading>
                    <Button
                        background="blue"
                        colorText="white"
                        onClick={() => navigate(routesPaths['Loan'])}
                    >Choose the card
                    </Button>
                </Container>

                <Flex justifyContent="flex-end">
                    <Grid
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(6, 1fr)"
                        gap={4}
                    >
                        <GridItem rowSpan={1} colSpan={3}>
                            <img src={cardImage1} width="250px" alt={cardImage1} />
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={3}>
                            <img src={cardImage2} width="250px" alt={cardImage2} />
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={3}>
                            <img src={cardImage3} width="250px" alt={cardImage3} />
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={3}>
                            <img src={cardImage4} width="250px" alt={cardImage4} />
                        </GridItem>
                    </Grid>
                </Flex>
            </Flex>

            <ListCardFeatures />

            <CurrencyDisplayContainer />

            <Flex
                margin="3rem 0"
                direction="column"
                alignItems="center"
                gap={10}
            >
                <Box marginBottom="3rem">
                    <Heading
                        textAlign="center"
                        marginBottom="1rem"
                        size="lg"
                    >
                        You can use our services anywhere in the world
                    </Heading>
                    <Text textAlign="center">
                        Withdraw and transfer money online through our application
                    </Text>
                </Box>
                <Image src={globalMapImage} alt={globalMapImage} />
            </Flex>

            <SliderNewsContainer />

            <SubscribeNews />
        </main >
    );
};
