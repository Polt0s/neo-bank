import React from 'react';
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
import { useNavigate } from 'react-router-dom';

import { Button } from 'shared';
import { ListCardFeatures, SubscribeNews } from 'components';
import { CurrencyDisplayContainer, SliderNewsContainer } from 'containers';
import { ThemeContext } from 'context';
import { uniqueId } from 'utils';

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
    const { stateTheme } = React.useContext(ThemeContext);

    const arrayImage: string[] = [cardImage1, cardImage2, cardImage3, cardImage4];

    return (
        <main className={className}>
            <Flex style={{ margin: '7rem 0' }} justifyContent="space-between">
                <Container margin={0} padding={0}>
                    <Heading
                        size="lg"
                        fontSize="48px"
                        marginBottom="4rem"
                        color={stateTheme.color}
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
                        {arrayImage.map((item) => (
                            <GridItem
                                rowSpan={1}
                                colSpan={3}
                                key={uniqueId()}
                            >
                                <Image
                                    src={item}
                                    width="250px"
                                    alt={item}
                                    borderRadius="1rem"
                                />
                            </GridItem>
                        ))}
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
                        color={stateTheme.color}
                    >
                        You can use our services anywhere in the world
                    </Heading>
                    <Text textAlign="center" color={stateTheme.color}>
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
