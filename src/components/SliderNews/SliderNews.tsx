import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Image,
    Link,
    Text
} from '@chakra-ui/react';

import { Button, Card } from 'shared';
import { cutText } from 'utils';

import styles from './SliderNews.module.css';

import { checkAnchorTag } from './helpers';

interface ISliderNews {
    data: TDataNews[];
    slidesPerView?: number;
}

export const SliderNews = ({ data }: ISliderNews) => {
    const [isDisabledPrev, setIsDisabledPrev] = React.useState(true);
    const [isDisabledNext, setIsDisabledNext] = React.useState(false);
    const [stateSlider, setStateSlider] = React.useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const scrollWidth = 500;
    const scrollError = 6;
    const length = data.length;
    const { translate, transition, activeIndex } = stateSlider;

    const nextSlide = () => {
        if (activeIndex === length - scrollError) {
            return setStateSlider({
                ...stateSlider,
                translate: length - scrollError,
                activeIndex: length - scrollError
            });
        }

        setStateSlider({
            ...stateSlider,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * scrollWidth
        });
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setStateSlider({
                activeIndex: 0,
                translate: 0,
                transition: 0.45
            });
        }

        setStateSlider({
            ...stateSlider,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * scrollWidth
        });
    };

    React.useEffect(() => {
        if (activeIndex === 0) {
            setIsDisabledPrev(true);
        } else {
            setIsDisabledPrev(false);
        }

    }, [activeIndex]);

    React.useEffect(() => {
        if (activeIndex === length - scrollError) {
            setIsDisabledNext(true);
        } else {
            setIsDisabledNext(false);
        }
    }, [activeIndex, length]);

    return (
        <Box>
            <Heading
                size="lg"
                textAlign="center"
                marginBottom="1.5rem"
            >
                Current news from the world of finance
            </Heading>
            <Text
                textAlign="center"
                marginBottom="3rem"
                color="#2d3748"
            >
                {`We update the news feed every 15 minutes. \n
                You can learn more by clicking on the news you are interested in.`}
            </Text>

            <Box className={styles['Slider']}>
                <Flex
                    gap={20}
                    marginBottom="3rem"
                    padding="0.5rem"
                    height="100%"
                    style={{
                        transform: `translateX(-${translate}px)`,
                        transition: `transform ease-out ${transition}s`,
                    }}
                >
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            {(item.urlToImage !== null && !checkAnchorTag(item.description)) ? (
                                <Card style={{ minWidth: '20rem', maxHeight: '30rem' }}>
                                    <Image
                                        marginBottom="2rem"
                                        height="7.5rem"
                                        width="100%"
                                        src={item.urlToImage}
                                        alt={item.urlToImage}
                                    />
                                    <Heading
                                        textAlign="center"
                                        marginBottom="2rem"
                                        size="md"
                                        height="6.5rem"
                                    >
                                        {cutText(item.title, 100)}
                                    </Heading>

                                    <Flex>
                                        <Link href={item.url} target="_blank">
                                            <Text textAlign="center">{cutText(item.description, 100)}</Text>
                                        </Link>
                                    </Flex>
                                </Card>
                            ) : null}
                        </React.Fragment>
                    ))}
                </Flex>

                <Flex justifyContent="flex-end" gap={5}>
                    <Button
                        disabled={isDisabledPrev}
                        className={styles['Slider__button-prev']}
                        onClick={prevSlide}
                    >
                        prev
                    </Button>
                    <Button
                        disabled={isDisabledNext}
                        className={styles['Slider__button-next']}
                        background="blue"
                        colorText="white"
                        onClick={nextSlide}
                    >
                        next
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
};

export type TDataNews = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}
