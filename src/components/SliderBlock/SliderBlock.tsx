import React from 'react';
import {
    Box,
    Flex,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text
} from '@chakra-ui/react';

import { FormInput, Label } from 'shared';
import { removeSpaces } from 'utils';

import styles from './SliderBlock.module.css';

interface ISliderBlock {
    sliderValue: number;
    setSliderValue: React.Dispatch<React.SetStateAction<number>>;
    minSum: number;
    maxSum: number;
    step: number;
}

export const SliderBlock = ({
    sliderValue,
    setSliderValue,
    minSum,
    maxSum,
    step
}: ISliderBlock) => {
    const [isFocus, setIsFocus] = React.useState<boolean>(false);
    const [valueSum, setValueSum] = React.useState<string>(String(sliderValue.toLocaleString('ru')));

    React.useEffect(() => {
        if (Number(removeSpaces(valueSum)) > maxSum) {
            setSliderValue(maxSum);
            setValueSum(`${maxSum.toLocaleString('ru')}`);
        }
        if (Number(removeSpaces(valueSum)) < minSum && !isFocus) {
            setSliderValue(minSum);
            setValueSum(`${minSum.toLocaleString('ru')}`);
        }
    }, [isFocus, maxSum, minSum, setSliderValue, sliderValue, valueSum]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(removeSpaces(event.target.value)));
        setValueSum(event.target.value);
    };

    const handleChangeFocus = () => {
        setIsFocus(!isFocus);
    };

    return (
        <Box className={styles['Slider-block']}>
            <Label paddingBottom="1rem" htmlFor="amount">Select amount</Label>
            <FormInput
                value={valueSum}
                onChange={handleChange}
                name="sum"
                id="sum"
                variant="unstyled"
                onFocus={handleChangeFocus}
                onBlur={handleChangeFocus}
                slider={true}
                bigSum={true}
            />

            <Slider
                aria-label="slider-ex-2"
                colorScheme="#5B35D5"
                value={sliderValue}
                step={step}
                min={minSum}
                max={maxSum}
                onChange={(value) => {
                    setSliderValue(value);
                    setValueSum(String(value.toLocaleString('ru')));
                }}
                isDisabled={isFocus}
            >
                <SliderTrack>
                    <SliderFilledTrack bg="#5B35D5" />
                </SliderTrack>
                <SliderThumb boxSize={6} bg="#5B35D5" />
            </Slider>

            <Flex justifyContent="space-between" alignItems="center" marginTop="-0.75rem">
                <Text color="#786d6d">{minSum.toLocaleString('ru')}</Text>
                <Text color="#786d6d">{maxSum.toLocaleString('ru')}</Text>
            </Flex>
        </Box>
    );
};
