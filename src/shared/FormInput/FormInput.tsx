import React from 'react';
import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';

import type { InputProps } from '@chakra-ui/react';

import { CompleteIcon, RejectIcon } from 'shared';

interface IFormInput extends InputProps {
    textError?: string;
    conditionForShowError?: boolean;
    isInvalid?: boolean;
    regExp?: RegExp;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: React.HTMLInputTypeAttribute;
    isFocus?: boolean;
}

export const FormInput = ({
    textError,
    conditionForShowError,
    isInvalid,
    regExp,
    onInput,
    isFocus,
    type = 'string',
    ...rest
}: IFormInput) => {
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
