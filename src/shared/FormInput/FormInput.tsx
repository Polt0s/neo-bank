import React from 'react';
import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';

import type { InputProps } from '@chakra-ui/react';

import { CompleteIcon, RejectIcon } from 'shared';
import { onlyNumbers } from 'utils';

interface IFormInput extends InputProps {
    textError?: string;
    conditionForShowError?: boolean;
    isInvalid?: boolean;
    regExp?: RegExp;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: React.HTMLInputTypeAttribute;
    isFocus?: boolean;
    maxLength?: number;
    dateMask?: boolean;
    bigSum?: boolean;
}

export const FormInput = React.forwardRef(({
    textError,
    conditionForShowError,
    isInvalid,
    regExp,
    onInput,
    isFocus,
    type,
    maxLength,
    dateMask,
    bigSum,
    ...rest
}: IFormInput, ref: React.ForwardedRef<HTMLInputElement>) => {
    const getInputNumbersValue = (value: string) => value.replace(onlyNumbers, '');

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputNumbersValue = getInputNumbersValue(event.target.value);
        let formattedInputValue = '';

        if (regExp) {
            event.target.value = event.target.value.replace(regExp, '');
        }

        if (bigSum) {
            event.target.value = Number(inputNumbersValue).toLocaleString('ru');
        }

        if (onInput) {
            onInput(event);
        }

        if (maxLength) {
            event.target.value = event.target.value.slice(0, maxLength);
        }

        if (dateMask) {
            if (!inputNumbersValue) {
                return event.target.value = '';
            }

            formattedInputValue = inputNumbersValue[0];

            if (inputNumbersValue.length > 1) {
                formattedInputValue += `${inputNumbersValue.substring(1, 2)}`;
            }
            if (inputNumbersValue.length >= 3) {
                formattedInputValue += `-${inputNumbersValue.substring(2, 4)}`;
            }

            if (inputNumbersValue.length >= 5) {
                formattedInputValue += `-${inputNumbersValue.substring(4, 10)}`;
            }

            event.target.value = formattedInputValue.slice(0, 10);
        }
    };

    const handleChangeKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;

        if (event.key === 'Backspace' && getInputNumbersValue(input.value).length === 1) {
            input.value = '';
        }

        return input;
    };

    return (
        <InputGroup style={{ display: 'flex', flexDirection: 'column' }}>
            <Input
                isInvalid={isFocus && isInvalid}
                onInput={handleChangeInput}
                onKeyDown={handleChangeKeyDown}
                type={type}
                ref={ref}
                {...rest}
            />
            {(conditionForShowError && isFocus) && (
                <Text color="#FF5631">{textError}</Text>
            )}

            {isFocus && (
                <>
                    {!isInvalid ? (
                        <InputRightElement children={<CompleteIcon />} />
                    ) : (
                        <InputRightElement children={<RejectIcon />} />
                    )}
                </>
            )}
        </InputGroup>
    );
});
