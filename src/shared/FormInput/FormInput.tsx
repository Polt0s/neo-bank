import React from 'react';
import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';

import type { InputProps } from '@chakra-ui/react';

import { CompleteIcon, RejectIcon } from 'shared';

import styles from './FormInput.module.css';

interface IFormInput extends InputProps {
    // value: string | number | readonly string[] | undefined;
    textError?: string;
    conditionForShowError?: boolean;
    isInvalid?: boolean;
    regExp?: RegExp;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: React.HTMLInputTypeAttribute;
}

export const FormInput = ({
    textError,
    conditionForShowError,
    isInvalid,
    regExp,
    onInput,
    type = 'string',
    ...rest
}: IFormInput) => {
    const [isFocus, setIsFocus] = React.useState<boolean>(false);

    const handleBlur = () => {
        setIsFocus(true);
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (regExp && type === 'number') {
            event.target.value = event.target.value.replace(regExp, '');
        }

        if (onInput) {
            onInput(event);
        }
    };

    return (
        <InputGroup style={{ display: 'flex', flexDirection: 'column' }}>
            <Input
                isInvalid={isFocus && isInvalid}
                onBlur={handleBlur}
                onInput={handleChangeInput}

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
};
