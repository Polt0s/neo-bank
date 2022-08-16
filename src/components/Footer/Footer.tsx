import {
    Link,
    Box,
    Flex,
    Heading,
    Text,
    Divider
} from '@chakra-ui/react';

import { uniqueId } from 'utils';

import neoflexLogo from 'assets/image/neoflexLogo.png';

import styles from './Footer.module.css';

import { dataLink } from './Footer.data';

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Box className={styles.Footer__container}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom="2rem"
                >
                    <Link href="https://www.neoflex.ru/" target="_blank">
                        <img
                            src={neoflexLogo}
                            alt={neoflexLogo}
                            width={163}
                            height={50}
                        />
                    </Link>

                    <Flex direction="column">
                        <Link href="tel:+7 (495) 984 25 13">
                            <Heading size="lg" marginBottom="0.5rem">
                                +7 (495) 984 25 13    
                            </Heading>
                        </Link>

                        <Text color="#2d3748">info@neoflex.ru</Text>
                    </Flex>
                </Flex>

                <Flex gridGap="0.5rem 2rem" wrap="wrap" >
                    {dataLink.map((item) => (
                        <Link className={styles.Footer__textLink} key={uniqueId()}>
                            <Text>{item.text}</Text>
                        </Link>
                    ))}
                </Flex>

                <Divider
                    bg="white"
                    margin="2rem 0"
                    borderBottomWidth="2px"
                    opacity="1"
                />

                <Text color="#2d3748">
                    We use cookies to personalize our services and improve the user experience of our website.
                    Cookies are small files containing information about previous visits to a website.
                    If you do not want to use cookies, please change your browser settings
                </Text>
            </Box>
        </footer>
    );
};
