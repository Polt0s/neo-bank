import React from 'react';
import {
    Heading,
    Text,
    Box,
    Input,
    Flex,
    Button,
    Center
} from '@chakra-ui/react';

import {
    Card,
    EmailIcon,
    SendLetterIcon
} from 'shared';
import { ThemeContext } from 'context';

export const SubscribeNews = () => {
    const [valueEmail, setValueEmail] = React.useState('');

    const { stateTheme } = React.useContext(ThemeContext);

    return (
        <Box marginBottom="3rem">
            <Flex direction="column" alignItems="center">
                <Text color="#EB801D" marginBottom="2rem">Support</Text>

                <Heading
                    size="lg"
                    marginBottom="1rem"
                    color={stateTheme.color}
                >
                    Subscribe Newsletter & get
                </Heading>
                <Heading
                    size="lg"
                    fontWeight="normal"
                    marginBottom="4rem"
                    color={stateTheme.color}
                >
                    Bank News
                </Heading>
            </Flex>

            <Center>
                <Card
                    height="6rem"
                    width="40%"
                    style={{ padding: 0 }}
                >
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        padding="0 2rem"
                        height="100%"
                    >
                        <EmailIcon />
                        <Input
                            name="email"
                            id="email"
                            type="email"
                            value={valueEmail}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValueEmail(event.target.value)}
                            placeholder="Your email"
                            variant="unstyled"
                            width="50%"
                        />

                        <Button
                            leftIcon={<SendLetterIcon />}
                            variant="solid"
                            bg="#686DF1"
                            color="white"
                            borderRadius="1rem"
                            minWidth="10rem"
                            height="3rem"
                        >
                            Subscribe
                        </Button>
                    </Flex>
                </Card>
            </Center>
        </Box>
    );
};
