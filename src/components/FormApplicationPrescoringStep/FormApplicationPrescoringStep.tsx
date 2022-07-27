import React from 'react';
import {
    Box,
    Heading,
    Select,
    Flex,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb
} from '@chakra-ui/react';
import { useFormik } from 'formik';

import { Button, Card, FormInput, Label } from 'shared';
import { checkEmail, onlyNumbers } from 'utils';

import type { IPostApplicationRequest } from 'api/controllers/application/response.types';

import { useNavigate } from 'react-router';

import styles from './FormApplicationPrescoringStep.module.css';

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

type TFields = 'lastName' | 'firstName' | 'middleName' | 'email' | 'birthdate' | 'passportSeries' | 'passportNumber'

interface IFormApplicationPrescoringStep {
    onSubmit: (values: IPostApplicationRequest) => void;
    routesPaths: Record<string, string>;
}

function isValidEmail(email: string) {
    return checkEmail.test(email);
}

export const FormApplicationPrescoringStep = ({ onSubmit, routesPaths }: IFormApplicationPrescoringStep) => {
    const [sliderValue, setSliderValue] = React.useState(150000);

    const navigate = useNavigate();

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
            const errors: any = {};

            if (!values.lastName.length) {
                errors.lastName = 'Enter your last name';
            }

            if (!values.firstName.length) {
                errors.firstName = 'Enter your first name';
            }

            if (!values.middleName.length) {
                errors.middleName = 'Enter your name';
            }

            if (!isValidEmail(values.email)) {
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
        validateOnBlur: true,
        onSubmit: (values) => {
            const result = {
                ...values,
                amount: sliderValue,
                term: Number(values.term)
            };

            console.log(result);
            onSubmit({ items: result });
            // navigate(routesPaths['Credit']);
        },
    });

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
                        onBlur={formik.handleBlur}
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
                        onBlur={formik.handleBlur}
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
                    <Label require htmlFor="amount">Select amount</Label>
                    <Text>{sliderValue.toLocaleString('ru')} ₽</Text>
                    <Slider
                        aria-label="slider-ex-2"
                        colorScheme="#5B35D5"
                        value={sliderValue}
                        step={1000}
                        min={15000}
                        max={600000}
                        onChange={(value) => setSliderValue(value)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack bg="#5B35D5" />
                        </SliderTrack>
                        <SliderThumb boxSize={6} bg="#5B35D5" />
                    </Slider>
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
                        type="date"
                        background="#f9f5e3"
                        textError={formik.errors.birthdate}
                        conditionForShowError={Boolean(formik.errors.birthdate)}
                        onBlur={formik.handleBlur}
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
                        onBlur={formik.handleBlur}
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
                        isFocus={formik.touched.passportNumber}
                        textError={formik.errors.passportNumber}
                        conditionForShowError={Boolean(formik.errors.passportNumber)}
                        onBlur={formik.handleBlur}
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
