import { Flex, Th } from '@chakra-ui/react';

import { ArrayDropDown, ArrayDropUp } from 'shared';
import { setFirstLetterUpper } from 'utils';

import type { TDataPayment } from './PaymentSchedule';
import type { TNewObject } from 'hooks';
import type { TColorMode } from 'context';

interface IRenderTableHeader {
    name: TKeys;
    handleSort: (key: keyof TDataPayment) => void;
    sortData: TNewObject;
    stateTheme: TColorMode;

}
export const RenderTableHeader = ({
    name,
    handleSort,
    sortData,
    stateTheme
}: IRenderTableHeader) => {
    return (
        <Th color={stateTheme.secondaryColor}>
            <Flex
                gap={1}
                justifyContent="center"
                alignItems="center"
            >
                <span>{setFirstLetterUpper(name)}</span>
                {sortData.key === name && sortData.direction === 'descending'
                    ? <ArrayDropDown onClick={() => handleSort(name)} cursor />
                    : <ArrayDropUp onClick={() => handleSort(name)} cursor />
                }
            </Flex>
        </Th>
    );
};

export type TKeys = 'number' | 'date' | 'totalPayment' | 'interestPayment' | 'debtPayment' | 'remainingDebt';
