import { Button, Logo } from 'shared';
import { Container, Flex, Stack, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import styles from './Header.module.css';

interface IHeader {
    routesPaths: Record<string, string>;
    goBackHome: () => void;
}

export const Header = ({ routesPaths, goBackHome }: IHeader) => {
    return (
        <header className={styles['Header']}>
            <Logo onClick={goBackHome} />

            <Container maxW="md">
                <Flex alignItems="center" gap="10" justifyContent="center">
                    <Link to={routesPaths['CreditCard']} className={styles.Header__link}>Credit card</Link>
                    <Link to={routesPaths['Product']} className={styles.Header__link}>Product</Link>
                    <Link to={routesPaths['Account']} className={styles.Header__link}>Account</Link>
                    <Text className={styles.Header__link}>Resource</Text>
                </Flex>
            </Container>

            <Stack direction="row" spacing={4} align="center">
                <Button colorText="blue">
                    Login
                </Button>
                <Button background="blue" colorText="white" className={styles.BtnSign}>Sign up</Button>
            </Stack>
        </header >
    );
};
