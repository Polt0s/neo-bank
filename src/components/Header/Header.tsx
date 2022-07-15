import React from 'react';
import { Logo } from 'shared';
import { Button, Container, Flex, Stack, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { ROUTER_NAMES } from 'Router';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles['Header']}>
            <Logo />

            <Container maxW="md">
                <Flex alignItems="center" gap="10" justifyContent="center">
                    <Link to={ROUTER_NAMES.Credit} className={styles.Header__link}>Credit</Link>
                    <Link to={ROUTER_NAMES.Product} className={styles.Header__link}>Product</Link>
                    <Link to={ROUTER_NAMES.Account} className={styles.Header__link}>Account</Link>
                    <Text className={styles.Header__link}>Resource</Text>
                </Flex>
            </Container>

            <Stack direction="row" spacing={4} align="center">
                <Button color="#003CFF">
                    Login
                </Button>
                <Button background="#003CFF" color="white" className={styles.BtnSign}>Sign up</Button>
            </Stack>
        </header>
    );
};
