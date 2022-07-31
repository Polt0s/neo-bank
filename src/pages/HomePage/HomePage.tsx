import React from 'react';
import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { adminStore } from 'store/admin.store';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { Button, FormInput } from 'shared';
import { ListCardFeatures } from 'components';
import { adminAPI } from 'api';
import { CurrencyDisplayContainer } from 'containers';

import cardImage1 from 'assets/image/cardImage1.jpg';
import cardImage2 from 'assets/image/cardImage2.jpg';
import cardImage3 from 'assets/image/cardImage3.jpg';
import cardImage4 from 'assets/image/cardImage4.jpg';

interface IHomePage {
    routesPaths: Record<string, string>;
}

export const HomePage = ({ routesPaths }: IHomePage) => {
    const navigate = useNavigate();

    return (
        <main>
            <Flex style={{ margin: '7rem 0' }} justifyContent="space-between">
                <Container margin={0} padding={0}>
                    <Heading size="lg" fontSize="48px" style={{ marginBottom: '4rem' }}>
                        Choose the design you like and apply for card right now
                    </Heading>
                    <Button
                        background="blue"
                        colorText="white"
                        onClick={() => navigate(routesPaths['CreditCard'])}
                    >Apply for card
                    </Button>
                </Container>

                <Flex justifyContent="flex-end">
                    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)" gap={4}>
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
        </main>
    );
};
