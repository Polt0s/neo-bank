import { Logo } from 'shared';
import { Button, Container, Flex, Stack, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import styles from './Header.module.css';

interface IHeader {
    routesPaths: Record<string, string>;
}

export const Header = ({ routesPaths }: IHeader) => {
    return (
        <header className={styles['Header']}>
            <Logo />

            <Container maxW="md">
                <Flex alignItems="center" gap="10" justifyContent="center">
                    <Link to={routesPaths.Credit} className={styles.Header__link}>Credit</Link>
                    <Link to={routesPaths.Product} className={styles.Header__link}>Product</Link>
                    <Link to={routesPaths.Account} className={styles.Header__link}>Account</Link>
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
