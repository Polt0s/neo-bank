import React from 'react';
import {
    Container,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import {
    Button,
    Logo,
    MoonIcon,
    SunIcon
} from 'shared';
import { uniqueId } from 'utils';

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
    const [currentPath, setCurrentPath] = React.useState<string>('');

    const location = useLocation();

    const pathList: Array<TNamePath> = ['Loan', 'Product', 'Account', 'Resource'];

    React.useEffect(() => {
        const getPath = getCurrentPathName(location.pathname);
        setCurrentPath(getPath);
    }, [location.pathname]);

    const getCurrentPathName = (path: string): string => {
        const rootPath = 1;
        return path.split('/')[rootPath];
    };

    return (
        <header className={styles['Header']}>
            <Logo onClick={goBackHome} />
            <Container maxW="md">
                <Flex
                    alignItems="center"
                    gap="10"
                    justifyContent="center"
                >
                    {pathList.map((item) => (
                        <Link to={routesPaths[item]} key={uniqueId()}>
                            <Text className={styles.Header__link}
                                color={currentPath === item.toLowerCase() ? '#B2A35F' : stateTheme.color}
                            >
                                {item === 'Loan' ? 'Credit card' : item}
                            </Text>
                        </Link>
                    ))}
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

type TNamePath = 'Loan' | 'Product' | 'Account' | 'Resource';
