import React from 'react';
import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';

import { CompleteIcon, RejectIcon } from 'shared';
import { onlyNumbers } from 'utils';

import styles from './FormInput.module.css';

import type { InputProps } from '@chakra-ui/react';

interface IFormInput extends InputProps {
    textError: string;
    conditionForShowError: boolean;
    isInvalid: boolean;
    regExp: RegExp;
    type: React.HTMLInputTypeAttribute;
    isFocus: boolean;
    maxLength: number;
    dateMask: boolean;
    bigSum: boolean;
    errorColor: string;
}

export const FormInput = React.forwardRef(({
    textError,
    conditionForShowError,
    isInvalid,
    regExp,
    isFocus,
    type,
    maxLength,
    dateMask,
    bigSum,
    errorColor,
    ...rest
}: Partial<IFormInput>, ref: React.ForwardedRef<HTMLInputElement>) => {
    const getInputNumbersValue = (value: string) => value.replace(onlyNumbers, '');

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputNumbersValue = getInputNumbersValue(event.target.value);
        let formattedInputValue = '';

        if (type === 'text') {
            event.target.value = event.target.value.trim();
        }

        if (regExp) {
            event.target.value = event.target.value.replace(regExp, '');
        }

        if (bigSum) {
            event.target.value = Number(inputNumbersValue).toLocaleString('ru');
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
        <InputGroup className={styles['Input-group']}>
            <Input
                isInvalid={isFocus && isInvalid}
                onInput={handleChangeInput}
                // onKeyDown={handleChangeKeyDown}
                type={type}
                ref={ref}
                {...rest}
            />
            {(conditionForShowError && isFocus) ? (
                <Text color={errorColor}>{textError}</Text>
            ) : (
                <Text height="1.5rem" />
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
