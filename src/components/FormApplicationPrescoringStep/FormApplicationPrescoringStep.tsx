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
    Label
} from 'shared';
import {
    checkEmail,
    checkBirthdate,
    isCheckOver18year,
    reverseBirthdate,
    uniqueId
} from 'utils';
import { SliderBlock } from 'components';
import { ThemeContext } from 'context';

import styles from './FormApplicationPrescoringStep.module.css';

import { fieldOptions } from './FormApplicationPrescoringStep.data';

import type { IPostApplicationRequest } from 'api';

interface IFormApplicationPrescoringStep {
    onSubmit: (values: IPostApplicationRequest) => void;
}

export const FormApplicationPrescoringStep = ({ onSubmit }: IFormApplicationPrescoringStep) => {
    const [sliderValue, setSliderValue] = React.useState<number>(150000);

    const { stateTheme } = React.useContext(ThemeContext);

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
            } else if (!isCheckOver18year(values.birthdate)) {
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
                middleName: !values.middleName.length ? null : values.middleName,
                amount: sliderValue,
                term: Number(values.term),
                birthdate: reverseBirthdate(values.birthdate)
            };

            onSubmit({ items: result });
        },
    });

    return (
        <Card className={styles['Form-application']} background={stateTheme.cardBackground}>
            <Flex gap={10} marginBottom="2rem">
                <Container margin={0} padding={0}>
                    <Flex
                        marginBottom="2rem"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Heading size="lg" color={stateTheme.color}>Customize your card</Heading>
                        <Text color={stateTheme.secondaryColor}>Step 1 of 5</Text>
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
                    <Divider
                        variant="dashed"
                        orientation="vertical"
                        bg="#968975b8"
                    />
                </Center>

                <Container>
                    <Heading
                        marginBottom="1rem"
                        size="md"
                        color={stateTheme.color}
                    >
                        You have chosen the amount
                    </Heading>
                    <Text
                        size="1.5rem"
                        paddingBottom="0.5rem"
                        color={stateTheme.secondaryColor}
                    >
                        {sliderValue.toLocaleString('ru')} ₽
                    </Text>
                    <Divider width="40%" />
                </Container>
            </Flex>

            <Container
                margin={0}
                padding={0}
                maxWidth="100%"
            >
                <Heading
                    marginBottom="1.5rem"
                    size="md"
                    color={stateTheme.color}
                >
                    Contact Information
                </Heading>

                <form onSubmit={formik.handleSubmit}>
                    <Container
                        margin={0}
                        padding={0}
                        maxWidth="100%"
                        className={styles['Form-container']}
                    >
                        {fieldOptions.map((field) => (
                            <Box key={field.key}>
                                <Label
                                    htmlFor={field.key}
                                    require={field.key !== 'middleName'}
                                    color={stateTheme.secondaryColor}
                                >
                                    {field.label}
                                </Label>
                                {field.component !== Select ? (
                                    <field.component
                                        value={formik.values[field.key]}
                                        onChange={formik.handleChange}
                                        name={field.key}
                                        id={field.key}
                                        type={field.type}
                                        focusBorderColor="#5B35D5"
                                        errorBorderColor="#FF5631"
                                        background="#f9f5e3"
                                        isInvalid={Boolean(formik.errors[field.key])}
                                        placeholder={field.placeholder}
                                        isFocus={formik.touched[field.key]}
                                        textError={formik.errors[field.key]}
                                        conditionForShowError={Boolean(formik.errors[field.key])}
                                        onBlur={formik.handleBlur}
                                        dateMask={field.key === 'birthdate'}
                                        maxLength={field.maxLength}
                                        regExp={field.regExp}
                                        errorColor={stateTheme.errorColor}
                                    />
                                ) : (
                                    <Select
                                        value={formik.values[field.key]}
                                        onChange={formik.handleChange}
                                        background="#f9f5e3"
                                        placeholder={field.placeholder}
                                        name={field.key}
                                        id={field.key}
                                        focusBorderColor="#5B35D5"
                                    >
                                        {field.options?.map((selectOption) => (
                                            <option key={uniqueId()} value={selectOption.value}>
                                                {selectOption.name}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            </Box>
                        ))}
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
