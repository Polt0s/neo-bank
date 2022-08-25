import React from 'react';
import {
    Box,
    Checkbox,
    Flex,
    Heading,
    Table,
    Text,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';

import { Button, Card } from 'shared';
import { reverseBirthdate } from 'utils';
import { ThemeContext } from 'context';

interface IPaymentSchedule {
    onSubmit: () => void;
    dataPaymentSchedule: TDataPayment[];
    isError?: boolean;
}

export const PaymentSchedule = ({ onSubmit, dataPaymentSchedule }: IPaymentSchedule) => {
    const [isCheckAgree, setIsCheckAgree] = React.useState(false);
    const { stateTheme } = React.useContext(ThemeContext);

    return (
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
                                <Th color={stateTheme.secondaryColor}>Number</Th>
                                <Th color={stateTheme.secondaryColor}>Date</Th>
                                <Th color={stateTheme.secondaryColor}>Total payment</Th>
                                <Th color={stateTheme.secondaryColor}>Interest payment</Th>
                                <Th color={stateTheme.secondaryColor}>Debt payment</Th>
                                <Th color={stateTheme.secondaryColor}>Remaining debt</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dataPaymentSchedule.map((item, index) => (
                                <Tr key={index}>
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

                    <Flex
                        gap={10}
                        justifyContent="flex-end"
                        marginTop="2rem"
                    >
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
                    </Flex>
                </TableContainer>
            </Card>
        </Box>
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
