import {
    Container,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import {
    Button,
    Logo,
    MoonIcon,
    SunIcon
} from 'shared';

import type { TColorMode } from 'context';

import styles from './Header.module.css';

interface IHeader {
    routesPaths: Record<string, string>;
    goBackHome: () => void;
    toggleTheme: () => void;
    stateTheme: TColorMode;
    currentColorMode: 'lightColorMode' | 'darkColorMode';
}

export const Header = ({
    routesPaths,
    goBackHome,
    toggleTheme,
    stateTheme,
    currentColorMode
}: IHeader) => {
    return (
        <header className={styles['Header']}>
            <Logo onClick={goBackHome} />
            <Container maxW="md">
                <Flex
                    alignItems="center"
                    gap="10"
                    justifyContent="center"
                >
                    <Link to={routesPaths['Loan']}>
                        <Text className={styles.Header__link} color={stateTheme.color}>
                            Credit card
                        </Text>
                    </Link>
                    <Link to={routesPaths['Product']}>
                        <Text className={styles.Header__link} color={stateTheme.color}>
                            Product
                        </Text>
                    </Link>
                    <Link to={routesPaths['Account']}>
                        <Text className={styles.Header__link} color={stateTheme.color}>
                            Account
                        </Text>
                    </Link>
                    <Text className={styles.Header__link} color={stateTheme.color}>
                        Resource
                    </Text>
                </Flex>
            </Container>

            <Flex gap={5} alignItems="center">
                <span className={styles['Header__theme-block']} onClick={toggleTheme}>
                    {currentColorMode === 'lightColorMode' ? (
                        <SunIcon />
                    ) : (
                        <MoonIcon />
                    )}
                </span>

                <Stack
                    direction="row"
                    spacing={4}
                    align="center"
                >
                    <Button
                        background="blue"
                        colorText="white"
                        className={styles.BtnSign}
                    >
                        Online bank
                    </Button>
                </Stack>
            </Flex>
        </header>
    );
};
