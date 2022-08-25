import React from 'react';
import {
    Flex,
    Heading,
    Image,
    Text
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'shared';
import { ThemeContext } from 'context';

import NotFoundImage from 'assets/image/NotFoundImage.png';

interface INotFoundPage {
    className: string;
}

export const NotFoundPage = ({ className }: INotFoundPage) => {
    const navigate = useNavigate();
    const { stateTheme } = React.useContext(ThemeContext);

    const onGoBack = () => {
        navigate(-1);
    };

    return (
        <main className={className}>
            <Flex
                alignItems="center"
                height="100%"
                justifyContent="space-between"
            >
                <Flex direction="column">
                    <Heading
                        marginBottom="1rem"
                        size="lg"
                        color={stateTheme.color}
                    >
                        Oops....
                    </Heading>
                    <Heading
                        marginBottom="1rem"
                        size="lg"
                        fontWeight="normal"
                        color={stateTheme.color}
                    >
                        Page  not found
                    </Heading>
                    <Text marginBottom="1.5rem" color={stateTheme.secondaryColor}>
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
                    <Image
                        src={NotFoundImage}
                        alt={NotFoundImage}
                        width={526}
                        height={526}
                    />
                </Flex>
            </Flex>
        </main>
    );
};
