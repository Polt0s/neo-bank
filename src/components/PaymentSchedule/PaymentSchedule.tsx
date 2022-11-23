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
    Tr,
    useDisclosure,
    Modal,
    ModalFooter,
    ModalContent,
    ModalBody,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton
} from '@chakra-ui/react';

import { Button, Card } from 'shared';
import { reverseBirthdate } from 'utils';
import { ThemeContext } from 'context';

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
    const [isCheckAgree, setIsCheckAgree] = React.useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { stateTheme } = React.useContext(ThemeContext);

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

                        <Flex justifyContent="space-between" marginTop="2rem">
                            <Button
                                background="red"
                                colorText="white"
                                width="6rem"
                                onClick={onOpen}
                            >
                                Deny
                            </Button>

                            <Flex
                                gap={10}
                                justifyContent="flex-end"
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
                        </Flex>
                    </TableContainer>
                </Card>
            </Box>


            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={isStatusDeny ? onClickGoHome : onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Deny application</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        {isStatusDeny ? 'Your application has been deny!' : 'You exactly sure, you want to cancel this application?'}
                    </ModalBody>

                    <ModalFooter>
                        {isStatusDeny ? (
                            <Button
                                background="blue"
                                colorText="white"
                                width="8rem"
                                onClick={onClickGoHome}
                            >
                                Go home
                            </Button>
                        ) : (
                            <Flex gap={10}>
                                <Button
                                    background="red"
                                    colorText="white"
                                    width="6rem"
                                    onClick={onSubmitDenyApplication}
                                    disabled={isLoadingForStatusDeny}
                                >
                                    Deny
                                </Button>
                                <Button
                                    width="6rem"
                                    onClick={onClose}
                                    background="blue"
                                    colorText="white"
                                >
                                    Cancel
                                </Button>
                            </Flex>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
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
