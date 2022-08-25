import React from 'react';
import {
    Flex,
    Heading,
    Text,
    Center,
    Box,
    Image
} from '@chakra-ui/react';

import {
    Button,
    Card,
    CompleteIcon,
    RejectIcon
} from 'shared';
import { formattedSum, uniqueId } from 'utils';
import { ThemeContext } from 'context';

import SurpriseImage from 'assets/image/SurpriseImage.png';

interface ILoanOffers {
    data: TDataOffers[];
    onSubmitOffer: (applicationId: string) => void;
}

export const LoanOffers = ({ data, onSubmitOffer }: ILoanOffers) => {
    const { stateTheme } = React.useContext(ThemeContext);

    return (
        <Box marginBottom="3rem">
            <Heading
                size="lg"
                marginBottom="2rem"
                textAlign="center"
                color={stateTheme.color}
            >
                Your personal offer
            </Heading>

            <Flex gap={10}>
                {data.map((offer) => (
                    <Card key={uniqueId()} hover={true} background={stateTheme.cardBackground}>
                        <Center marginBottom="2rem">
                            <Image
                                src={SurpriseImage}
                                alt={SurpriseImage}
                                width={150}
                                height={150}
                            />
                        </Center>

                        <Flex
                            gap={3}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            marginBottom="4rem"
                        >
                            <Text color={stateTheme.secondaryColor}>Requested amount: {offer.requestedAmount.toLocaleString('ru')} ₽</Text>
                            <Text color={stateTheme.secondaryColor}>Total amount: {offer.totalAmount.toLocaleString('ru')} ₽</Text>
                            <Text color={stateTheme.secondaryColor}>For {offer.term} months</Text>
                            <Text color={stateTheme.secondaryColor}>Monthly payment: {formattedSum(offer.monthlyPayment)} ₽</Text>
                            <Text color={stateTheme.secondaryColor}>Your rate: {offer.rate}%</Text>

                            {offer.isInsuranceEnabled ? (
                                <Flex gap={2}>
                                    <Text color={stateTheme.secondaryColor}>Insurance included</Text>
                                    <CompleteIcon />
                                </Flex>
                            ) : (
                                <Flex gap={2}>
                                    <Text color={stateTheme.secondaryColor}>Insurance included</Text>
                                    <RejectIcon />
                                </Flex>
                            )}

                            {offer.isSalaryClient ? (
                                <Flex gap={2}>
                                    <Text color={stateTheme.secondaryColor}>Salary client</Text>
                                    <CompleteIcon />
                                </Flex>
                            ) : (
                                <Flex gap={2}>
                                    <Text color={stateTheme.secondaryColor}>Salary client</Text>
                                    <RejectIcon />
                                </Flex>
                            )}
                        </Flex>

                        <Center>
                            <Button
                                width="9.3rem"
                                height="3rem"
                                background="blue"
                                colorText="white"
                                onClick={() => offer.uniqueId && onSubmitOffer(offer.uniqueId)}
                            >
                                Select
                            </Button>
                        </Center>
                    </Card>
                ))}
            </Flex>
        </Box>
    );
};

type TDataOffers = {
    applicationId: number;
    requestedAmount: number;
    totalAmount: number;
    term: number;
    monthlyPayment: number;
    rate: number;
    isInsuranceEnabled: boolean;
    isSalaryClient: boolean;
    uniqueId?: string;
}
