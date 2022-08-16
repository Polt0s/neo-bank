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

import SurpriseImage from 'assets/image/SurpriseImage.png';

interface ILoanOffers {
    data: TDataOffers[];
    onSubmitOffer: (applicationId: string) => void;
}

export const LoanOffers = ({ data, onSubmitOffer }: ILoanOffers) => {
    return (
        <Box marginBottom="3rem">
            <Heading
                size="lg"
                marginBottom="2rem"
                textAlign="center"
            >
                Your personal offer
            </Heading>

            <Flex gap={10}>
                {data.map((offer) => (
                    <Card key={uniqueId()} hover={true}>
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
                            <Text>Requested amount: {offer.requestedAmount.toLocaleString('ru')} ₽</Text>
                            <Text>Total amount: {offer.totalAmount.toLocaleString('ru')} ₽</Text>
                            <Text>For {offer.term} months</Text>
                            <Text>Monthly payment: {formattedSum(offer.monthlyPayment)} ₽</Text>
                            <Text>Your rate: {offer.rate}%</Text>

                            {offer.isInsuranceEnabled ? (
                                <Flex gap={2}>
                                    <Text>Insurance included</Text>
                                    <CompleteIcon />
                                </Flex>
                            ) : (
                                <Flex gap={2}>
                                    <Text>Insurance included</Text>
                                    <RejectIcon />
                                </Flex>
                            )}

                            {offer.isSalaryClient ? (
                                <Flex gap={2}>
                                    <Text>Salary client</Text>
                                    <CompleteIcon />
                                </Flex>
                            ) : (
                                <Flex gap={2}>
                                    <Text>Salary client</Text>
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
    requestedAmount: number; // запрашиваемая сумма
    totalAmount: number; // итоговая сумма
    term: number; // количество месяцев
    monthlyPayment: number; // ежемесячный платёж
    rate: number; // ставка
    isInsuranceEnabled: boolean; // будет ли страховка
    isSalaryClient: boolean; // зарплатный ли клиент
    uniqueId?: string;
}
