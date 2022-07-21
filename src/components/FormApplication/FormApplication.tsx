import React from 'react';
import {
    FormControl,
    FormHelperText,
    Input,
    Box,
    Heading,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Flex,
    Text,
    FormErrorMessage,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';
// import { useForm, Controller } from 'react-hook-form';
import { useFormik } from 'formik';

import { Button, Card, CompleteIcon, FormInput, Label, RejectIcon } from 'shared';
import { checkEmail, onlyNumbers } from 'utils';

import type { IPostApplicationRequest } from 'api/controllers/application/response.types';

import { useNavigate } from 'react-router';

import styles from './FormApplication.module.css';

interface IInitialFormState {
    amount: number;
    term: number;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    birthdate: string;
    passportSeries: string;
    passportNumber: string;
}

type TFields = 'lastName' | 'firstName' | 'middleName' | 'email' | 'birthdate' | 'passportSeries' | 'passportNumber'

interface IFormApplication {
    onSubmit: (values: IPostApplicationRequest) => void;
    routesPaths: Record<string, string>;
}

export const FormApplication = ({ onSubmit, routesPaths }: IFormApplication) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            lastName: '',
            firstName: '',
            middleName: '',
            term: 6,
            amount: 10000,
            email: '',
            birthdate: '',
            passportSeries: '',
            passportNumber: ''
        },
        validate: (values) => {
            const errors: any = {};

            if (!values.lastName.length) {
                errors.lastName = 'Enter your last name';
            }

            if (!values.firstName.length) {
                errors.firstName = 'Enter your first name';
            }

            if (!values.middleName.length) {
                errors.middleName = 'Enter your  name';
            }

            if (!checkEmail.test(values.email)) {
                errors.email = 'Incorrect email address';
            }

            if (!values.birthdate.length) {
                errors.birthdate = 'Enter your date of birth';
            }

            if (values.passportSeries.length < 4) {
                errors.passportSeries = 'The series must be 4 digits';
            }

            if (values.passportNumber.length < 6) {
                errors.passportNumber = 'The series must be 6 digits';
            }
            return errors;
        },
        onSubmit: (values) => {
            const result = {
                ...values,
                amount: Number(values.amount),
                term: Number(values.term)
            };

            console.log(result);
            onSubmit({ items: result });
            navigate(routesPaths['Credit']);
        },
    });

    // console.log(formik.values);

    return (
        <Card style={{ marginBottom: '200px', paddingBottom: 0 }} id="formApplication">
            <Heading size="lg" marginBottom="2rem">Customize your card</Heading>

            <form className={styles['Form-container']} onSubmit={formik.handleSubmit}>
                <Box>
                    <Label htmlFor="lastName" require>Your last name</Label>
                    <FormInput
                        value={formik.values.lastName}
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
                    />
                </Box>

                <Box>
                    <Label require htmlFor="firstName">Your first name</Label>
                    <FormInput
                        value={formik.values.firstName}
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
                    />
                </Box>

                <Box>
                    <Label require htmlFor="middleName">Your patronymic</Label>
                    <FormInput
                        value={formik.values.middleName}
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
                    >
                        <option value="12">12 month</option>
                        <option value="18">18 month</option>
                        <option value="24">24 month</option>
                    </Select>
                </Box>

                <Box>
                    <Label require htmlFor="amount">Select amount</Label>
                    <NumberInput
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                        name="amount"
                        id="amount"
                        step={5000}
                        defaultValue={10000}
                        min={10000}
                        max={100000}
                        background="#f9f5e3"
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>

                <Box>
                    <Label require htmlFor="email">Your email</Label>
                    <FormInput
                        value={formik.values.email}
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        type="email"
                        isFocus={formik.touched.email}
                        focusBorderColor="#5B35D5"
                        placeholder="test@gmail.com"
                        background="#f9f5e3"
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
                        type="date"
                        background="#f9f5e3"
                        textError={formik.errors.birthdate}
                        conditionForShowError={Boolean(formik.errors.birthdate)}
                    />
                </Box>

                <Box>
                    <Label require htmlFor="passportSeries">Your passport series</Label>
                    <FormInput
                        value={formik.values.passportSeries}
                        onChange={formik.handleChange}
                        name="passportSeries"
                        id="passportSeries"
                        type="number"
                        focusBorderColor="#5B35D5"
                        errorBorderColor="#FF5631"
                        isInvalid={Boolean(formik.errors.passportSeries)}
                        isFocus={formik.touched.passportSeries}
                        background="#f9f5e3"
                        placeholder="0000"
                        regExp={onlyNumbers}
                        textError={formik.errors.passportSeries}
                        conditionForShowError={Boolean(formik.errors.passportSeries)}
                    />
                </Box>

                <Box>
                    <Label require htmlFor="passportNumber">Your passport number</Label>
                    <FormInput
                        value={formik.values.passportNumber}
                        onChange={formik.handleChange}
                        name="passportNumber"
                        id="passportNumber"
                        type="number"
                        focusBorderColor="#5B35D5"
                        errorBorderColor="#FF5631"
                        isInvalid={Boolean(formik.errors.passportNumber)}
                        background="#f9f5e3"
                        placeholder="000000"
                        regExp={onlyNumbers}
                        isFocus={formik.touched.passportSeries}
                        textError={formik.errors.passportNumber}
                        conditionForShowError={Boolean(formik.errors.passportNumber)}
                    />
                </Box>

                <Flex justifyContent="flex-end" className={styles['Form-container__Button-block']}>
                    <Button
                        type="submit"
                        width="9.3rem"
                        background="blue"
                        colorText="white"
                    >
                        Continue
                    </Button>
                </Flex>
            </form>
        </Card >
    );
};
