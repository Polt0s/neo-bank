import React from 'react';
import { Flex, FormLabel, Text } from '@chakra-ui/react';

import type { FormLabelProps } from '@chakra-ui/react';

interface ILabel extends FormLabelProps {
    children: React.ReactNode;
    require?: boolean;
    htmlFor: string;
}

export const Label = ({ children, require = false, ...rest }: ILabel) => {
    return (
        <FormLabel {...rest}>
            <Flex gap={1}>
                {children} {require && (
                    <Text color="red">*</Text>
                )}
            </Flex>
        </FormLabel>
    );
};
