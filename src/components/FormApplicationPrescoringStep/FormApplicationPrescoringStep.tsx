import React from 'react';
import {
    Box,
    Heading,
    Select,
    Flex,
    Text,
    Container,
    Divider,
    Center
} from '@chakra-ui/react';
import { useFormik } from 'formik';

import {
    Button,
    Card,
    FormInput,
    Label
} from 'shared';
import {
    checkEmail,
    onlyNumbers,
    checkBirthdate,
    isCheckOver18year,
    reverseBirthdate
} from 'utils';
import { SliderBlock } from 'components';

import type { IPostApplicationRequest } from 'api';

import styles from './FormApplicationPrescoringStep.module.css';

interface IFormApplicationPrescoringStep {
    onSubmit: (values: IPostApplicationRequest) => void;
    refLink?: React.RefObject<HTMLDivElement>;
}

export const FormApplicationPrescoringStep = ({ onSubmit, refLink }: IFormApplicationPrescoringStep) => {
    const [sliderValue, setSliderValue] = React.useState<number>(150000);

    const formik = useFormik<IInitialFormState>({
        initialValues: {
            lastName: '',
            firstName: '',
            middleName: '',
            term: 6,
            email: '',
            birthdate: '',
            passportSeries: '',
            passportNumber: ''
        },
        validate: (values) => {
            const errors: Record<string, string> = {};

            if (!values.lastName.length) {
                errors.lastName = 'Enter your last name';
            }

            if (!values.firstName.length) {
                errors.firstName = 'Enter your first name';
            }

            if (!checkEmail.test(values.email)) {
                errors.email = 'Incorrect email address';
            }

            if (!checkBirthdate.test(values.birthdate) || values.birthdate.length < 10) {
                errors.birthdate = 'Incorrect date of birth';
            } else if (!isCheckOver18year(values.birthdate)) { // поправить корректность проверки на возраст
                errors.birthdate = 'You must be over 18';
            }

            if (values.passportSeries.length < 4) {
                errors.passportSeries = 'The series must be 4 digits';
            }

            if (values.passportNumber.length < 6) {
                errors.passportNumber = 'The series must be 6 digits';
            }

            return errors;
        },
        validateOnBlur: true,
        onSubmit: (values) => {
            const result = {
                ...values,
                amount: sliderValue,
                term: Number(values.term),
                birthdate: reverseBirthdate(values.birthdate)
            };

            onSubmit({ items: result });
        },
    });

    return (
        <Card className={styles['form-application']} ref={refLink}>
            <Flex gap={10} marginBottom="2rem">
                <Container margin={0} padding={0}>
                    <Flex marginBottom="2rem" justifyContent="space-between" alignItems="center">
                        <Heading size="lg">Customize your card</Heading>
                        <Text>Step 1 of 4</Text>
                    </Flex>

                    <SliderBlock
                        sliderValue={sliderValue}
                        setSliderValue={setSliderValue}
                        minSum={15000}
                        maxSum={600000}
                        step={1000}
                    />
                </Container>

                <Center>
                    <Divider variant="dashed" orientation="vertical" bg="#968975b8" />
                </Center>

                <Container>
                    <Heading marginBottom="1rem" size="md">You have chosen the amount</Heading>
                    <Text size="1.5rem" paddingBottom="0.5rem">{sliderValue.toLocaleString('ru')} ₽</Text>
                    <Divider width="40%" />
                </Container>
            </Flex>

            <Container margin={0} padding={0} maxWidth="100%">
                <Heading marginBottom="1.5rem" size="md">Contact Information</Heading>

                <form onSubmit={formik.handleSubmit}>
                    <Container margin={0} padding={0} maxWidth="100%" className={styles['Form-container']}>
                        <Box>
                            <Label htmlFor="lastName" require>Your last name</Label>
                            <FormInput
                                value={(formik.values.lastName).trim()}
                                onChange={formik.handleChange}
                                name="lastName"
                                id="lastName"
                                type="text"
                                focusBorderColor="#5B35D5"
                                errorBorderColor="#FF5631"
                                isInvalid={Boolean(formik.errors.lastName)}
                                background="#f9f5e3"
                                placeholder="For example Doe"
                                isFocus={formik.touched.lastName}
                                textError={formik.errors.lastName}
                                conditionForShowError={Boolean(formik.errors.lastName)}
                                onBlur={formik.handleBlur}
                            />
                        </Box>

                        <Box>
                            <Label require htmlFor="firstName">Your first name</Label>
                            <FormInput
                                value={(formik.values.firstName).trim()}
                                onChange={formik.handleChange}
                                name="firstName"
                                id="firstName"
                                type="text"
                                focusBorderColor="#5B35D5"
                                errorBorderColor="#FF5631"
                                isInvalid={Boolean(formik.errors.firstName)}
                                background="#f9f5e3"
                                isFocus={formik.touched.firstName}
                                placeholder="For example Jhon"
                                textError={formik.errors.firstName}
                                conditionForShowError={Boolean(formik.errors.firstName)}
                                onBlur={formik.handleBlur}
                            />
                        </Box>

                        <Box>
                            <Label htmlFor="middleName">Your patronymic</Label>
                            <FormInput
                                value={(formik.values.middleName).trim()}
                                onChange={formik.handleChange}
                                name="middleName"
                                id="middleName"
                                type="text"
                                focusBorderColor="#5B35D5"
                                errorBorderColor="#FF5631"
                                isInvalid={Boolean(formik.errors.middleName)}
                                background="#f9f5e3"
                                placeholder="For example Victorovich"
                                isFocus={formik.touched.middleName}
                                textError={formik.errors.middleName}
                                conditionForShowError={Boolean(formik.errors.middleName)}
                                onBlur={formik.handleBlur}
                            />
                        </Box>

                        <Box>
                            <Label require htmlFor="term">Select term</Label>
                            <Select
                                value={formik.values.term}
                                onChange={formik.handleChange}
                                background="#f9f5e3"
                                placeholder="6 month"
                                name="term"
                                id="term"
                                focusBorderColor="#5B35D5"
                            >
                                <option value="12">12 month</option>
                                <option value="18">18 month</option>
                                <option value="24">24 month</option>
                            </Select>
                        </Box>

                        <Box>
                            <Label require htmlFor="email">Your email</Label>
                            <FormInput
                                value={(formik.values.email).trim()}
                                name="email"
                                id="email"
                                onChange={formik.handleChange}
                                type="email"
                                isFocus={formik.touched.email}
                                isInvalid={Boolean(formik.errors.email)}
                                focusBorderColor="#5B35D5"
                                errorBorderColor="#FF5631"
                                placeholder="test@gmail.com"
                                background="#f9f5e3"
                                textError={formik.errors.email}
                                conditionForShowError={Boolean(formik.errors.email)}
                                onBlur={formik.handleBlur}
                            />
                        </Box>

                        <Box>
                            <Label require htmlFor="birthdate">Your date of birth</Label>
                            <FormInput
                                value={formik.values.birthdate}
                                onChange={formik.handleChange}
                                name="birthdate"
                                id="birthdate"
                                placeholder="Select Date and Time"
                                focusBorderColor="#5B35D5"
                                errorBorderColor="#FF5631"
                                isInvalid={Boolean(formik.errors.birthdate)}
                                isFocus={formik.touched.birthdate}
                                size="md"
                                background="#f9f5e3"
                                textError={formik.errors.birthdate}
                                conditionForShowError={Boolean(formik.errors.birthdate)}
                                onBlur={formik.handleBlur}
                                dateMask={true}
                            />
                        </Box>

                        <Box>
                            <Label require htmlFor="passportSeries">Your passport series</Label>
                            <FormInput
                                value={formik.values.passportSeries}
                                onChange={formik.handleChange}
                                name="passportSeries"
                                id="passportSeries"
                                type="text"
                                focusBorderColor="#5B35D5"
                                errorBorderColor="#FF5631"
                                isInvalid={Boolean(formik.errors.passportSeries)}
                                isFocus={formik.touched.passportSeries}
                                background="#f9f5e3"
                                placeholder="0000"
                                regExp={onlyNumbers}
                                textError={formik.errors.passportSeries}
                                conditionForShowError={Boolean(formik.errors.passportSeries)}
                                onBlur={formik.handleBlur}
                                maxLength={4}
                            />
                        </Box>

                        <Box>
                            <Label require htmlFor="passportNumber">Your passport number</Label>
                            <FormInput
                                value={formik.values.passportNumber}
                                onChange={formik.handleChange}
                                name="passportNumber"
                                id="passportNumber"
                                type="text"
                                focusBorderColor="#5B35D5"
                                errorBorderColor="#FF5631"
                                isInvalid={Boolean(formik.errors.passportNumber)}
                                background="#f9f5e3"
                                placeholder="000000"
                                regExp={onlyNumbers}
                                isFocus={formik.touched.passportNumber}
                                textError={formik.errors.passportNumber}
                                conditionForShowError={Boolean(formik.errors.passportNumber)}
                                onBlur={formik.handleBlur}
                                maxLength={6}
                            />
                        </Box>
                    </Container>

                    <Flex
                        justifyContent="flex-end"
                        marginTop="1.5rem"
                        className={styles['Form-container__Button-block']}
                    >
                        <Button
                            type="submit"
                            width="9.3rem"
                            height="3rem"
                            background="blue"
                            colorText="white"
                        >
                            Continue
                        </Button>
                    </Flex>
                </form>
            </Container>
        </Card>
    );
};

interface IInitialFormState {
    term: number;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    birthdate: string;
    passportSeries: string;
    passportNumber: string;
}
