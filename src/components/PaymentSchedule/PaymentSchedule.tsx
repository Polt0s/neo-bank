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

interface IPaymentSchedule {
    onSubmit: () => void;
    dataPaymentSchedule: TDataPayment[];
    isError?: boolean;
}

export const PaymentSchedule = ({ onSubmit, dataPaymentSchedule }: IPaymentSchedule) => {
    const [isCheckAgree, setIsCheckAgree] = React.useState(false);

    return (
        <Box width="100%" marginBottom="3rem">
            <Card>
                <Flex
                    alignItems="center"
                    marginBottom="2rem"
                    gap={20}
                >
                    <Heading size="lg">Payment Schedule</Heading>
                    <Text>Step 3 of 5</Text>
                </Flex>

                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Number</Th>
                                <Th>Date</Th>
                                <Th>Total payment</Th>
                                <Th>Interest payment</Th>
                                <Th>Debt payment</Th>
                                <Th>Remaining debt</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {dataPaymentSchedule.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.number}</Td>
                                    <Td>{reverseBirthdate(item.date)}</Td>
                                    <Td>{item.totalPayment}</Td>
                                    <Td>{item.interestPayment}</Td>
                                    <Td>{item.debtPayment}</Td>
                                    <Td>{item.remainingDebt}</Td>
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
