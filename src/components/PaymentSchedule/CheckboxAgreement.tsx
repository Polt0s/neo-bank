import React from 'react';
import { Checkbox } from '@chakra-ui/react';

import { Button } from 'shared';
import { TColorMode } from 'context';

interface ICheckboxAgreement {
    stateTheme: TColorMode;
    onSubmit: () => void;
}

export const CheckboxAgreement = ({ stateTheme, onSubmit }: ICheckboxAgreement) => {
    const [isCheckAgree, setIsCheckAgree] = React.useState(false);

    return (
        <>
            <Checkbox
                defaultChecked size="lg"
                isChecked={isCheckAgree}
                onChange={() => setIsCheckAgree(!isCheckAgree)}
                color={stateTheme.secondaryColor}
            >
                I agree with the payment schedule
            </Checkbox>

            <Button
                disabled={!isCheckAgree}
                background="blue"
                colorText="white"
                onClick={onSubmit}
                width="6rem"
            >
                Send
            </Button>
        </>
    );
};
