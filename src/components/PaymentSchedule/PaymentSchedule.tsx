import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Table,
    Text,
    TableContainer,
    Tbody,
    Td,
    Thead,
    Tr
} from '@chakra-ui/react';

import { Card } from 'shared';
import { reverseBirthdate } from 'utils';
import { ThemeContext } from 'context';
import { useSortableData } from 'hooks';

import { ModalApplicationDeny } from './ModalApplicationDeny';
import { CheckboxAgreement } from './CheckboxAgreement';
import { RenderTableHeader } from './RenderTableHeader';

import type { TKeys } from './RenderTableHeader';

interface IPaymentSchedule {
    onSubmit: () => void;
    dataPaymentSchedule: TDataPayment[];
    isError?: boolean;
    onSubmitDenyApplication: () => void;
    isLoadingForStatusDeny: boolean;
    isStatusDeny: boolean;
    onClickGoHome: () => void;
}

export const PaymentSchedule = ({
    onSubmit,
    dataPaymentSchedule,
    onSubmitDenyApplication,
    isLoadingForStatusDeny,
    isStatusDeny,
    onClickGoHome
}: IPaymentSchedule) => {
    const { data, handleSort, sortData } = useSortableData(dataPaymentSchedule, { key: 'number', direction: 'ascending' });
    const { stateTheme } = React.useContext(ThemeContext);

    const arrayHeaders: TKeys[] = ['number', 'date', 'totalPayment', 'interestPayment', 'debtPayment', 'remainingDebt'];

    return (
        <>
            <Box width="100%" marginBottom="3rem">
                <Card background={stateTheme.cardBackground}>
                    <Flex
                        alignItems="center"
                        marginBottom="2rem"
                        gap={20}
                    >
                        <Heading size="lg" color={stateTheme.color}>Payment Schedule</Heading>
                        <Text color={stateTheme.secondaryColor}>Step 3 of 5</Text>
                    </Flex>

                    <TableContainer>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    {arrayHeaders.map((name) => (
                                        <RenderTableHeader
                                            name={name}
                                            key={name}
                                            handleSort={handleSort}
                                            sortData={sortData}
                                            stateTheme={stateTheme}
                                        />
                                    ))}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map((item: any) => (
                                    <Tr key={item.number}>
                                        <Td color={stateTheme.secondaryColor}>{item.number}</Td>
                                        <Td color={stateTheme.secondaryColor}>{reverseBirthdate(item.date)}</Td>
                                        <Td color={stateTheme.secondaryColor}>{item.totalPayment}</Td>
                                        <Td color={stateTheme.secondaryColor}>{item.interestPayment}</Td>
                                        <Td color={stateTheme.secondaryColor}>{item.debtPayment}</Td>
                                        <Td color={stateTheme.secondaryColor}>{item.remainingDebt}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>

                    </TableContainer>

                    <Flex justifyContent="space-between" marginTop="2rem">
                        <ModalApplicationDeny
                            onSubmitDenyApplication={onSubmitDenyApplication}
                            isLoadingForStatusDeny={isLoadingForStatusDeny}
                            isStatusDeny={isStatusDeny}
                            onClickGoHome={onClickGoHome}
                        />

                        <Flex
                            gap={10}
                            justifyContent="flex-end"
                        >
                            <CheckboxAgreement onSubmit={onSubmit} stateTheme={stateTheme} />
                        </Flex>
                    </Flex>
                </Card>
            </Box>
        </>
    );
};

export type TDataPayment = {
    number: number;
    date: string;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
}
