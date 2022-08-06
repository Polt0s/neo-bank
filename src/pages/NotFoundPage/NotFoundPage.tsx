import { Flex, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import NotFoundImage from 'assets/image/NotFoundImage.png';
import { Button } from 'shared';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    const onGoBack = () => {
        navigate(-1);
    };

    return (
        <Flex
            alignItems="center"
            height="100%"
            justifyContent="space-between"
        >
            <Flex direction="column">
                <Heading marginBottom="1rem" size="lg">Oops.... </Heading>
                <Heading
                    marginBottom="1rem"
                    size="lg"
                    fontWeight="normal"
                >
                    Page  not found
                </Heading>
                <Text marginBottom="1.5rem" color="#4B4B4B">
                    {'This Page doesn`t exist or was removed! \nWe suggest you go back.'}
                </Text>
                <Button
                    background="blue"
                    colorText="white"
                    width="12rem"
                    onClick={onGoBack}
                >
                    Go back
                </Button>
            </Flex>

            <Flex justifyContent="center" alignItems="center">
                <img
                    src={NotFoundImage}
                    alt={NotFoundImage}
                    width="526px"
                    height="526px"
                />
            </Flex>
        </Flex>
    );
};