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
    FormErrorMessage
} from '@chakra-ui/react';
import { Button, Card, FormInput, Label } from 'shared';
import { onlyNumbers } from 'utils';

import styles from './FormApplication.module.css';

interface IInitialFormState {
    lastName: { value: string; check: boolean };
    firstName: { value: string; check: boolean };
    middleName: { value: string; check: boolean };
    term: { value: number; check: boolean };
    amount: { value: number; check: boolean };
    email: { value: string; check: boolean };
    birthdate: { value: string; check: boolean };
    passportSeries: { value: string; check: boolean };
    passportNumber: { value: string; check: boolean };
}

const initialFormState = {
    lastName: { value: '', check: false },
    firstName: { value: '', check: false },
    middleName: { value: '', check: false },
    term: { value: 6, check: true },
    amount: { value: 10000, check: true },
    email: { value: '', check: false },
    birthdate: { value: '', check: false },
    passportSeries: { value: '', check: false },
    passportNumber: { value: '', check: false },
};

type TFields = 'lastName' | 'firstName' | 'middleName' | 'term' | 'amount' | 'email' | 'birthdate' | 'passportSeries' | 'passportNumber'


export const FormApplication = () => {
    const [formState, setFormState] = React.useState<IInitialFormState>(initialFormState);
    // const [isCheckForm, isSetCheckForm] = React.useState<boolean>(false);

    // React.useEffect(() => {
    //     const checkFields = Object.values(formState)
    //         .map((item) => item.check)
    //         .includes(false);

    //     console.log(checkFields);

    //     if (!checkFields) {
    //         isSetCheckForm(true);
    //     }
    // }, [formState]);

    const addData = (name: TFields, value: string) => {
        setFormState({ ...formState, [name]: { value: value, check: formState[name].check } });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <Card style={{ marginBottom: '200px', paddingBottom: 0 }}>
            <Heading size="lg" marginBottom="2rem">Customize your card</Heading>

            <form className={styles['Form-container']} onSubmit={onSubmit}>
                <Box>
                    <Label htmlFor="last name" require>Your last name</Label>
                    <FormInput
                        value={formState.lastName.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => addData('lastName', event.target.value)}
                        name="lastName"
                        type="text"
                        focusBorderColor="#5B35D5"
                        errorBorderColor="#FF5631"
                        isInvalid={formState.lastName.value.length === 0}
                        background="#f9f5e3"
                        placeholder="For example Doe"
                        textError="Enter your last name"
                        conditionForShowError={formState.lastName.value.length === 0}
                    />
                </Box>

                <Box>
                    <Label require htmlFor="first name">Your first name</Label>
                    <FormInput
                        value={formState.firstName.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => addData('firstName', event.target.value)}
                        name="firstName"
                        type="text"
                        focusBorderColor="#5B35D5"
                        errorBorderColor="#FF5631"
                        isInvalid={formState.firstName.value.length === 0}
                        background="#f9f5e3"
                        placeholder="For example Jhon"
                        textError="Enter your first name"
                        conditionForShowError={formState.firstName.value.length === 0}
                    />
                </Box>

                <Box>
                    <Label require htmlFor="middle name">Your patronymic</Label>
                    <FormInput
                        value={formState.middleName.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => addData('middleName', event.target.value)}
                        name="middleName"
                        type="text"
                        focusBorderColor="#5B35D5"
                        errorBorderColor="#FF5631"
                        isInvalid={formState.middleName.value.length === 0}
                        background="#f9f5e3"
                        placeholder="For example Victorovich"
                        textError="Enter your patronymic"
                        conditionForShowError={formState.middleName.value.length === 0}
                    />
                </Box>

                <Box>
                    <Label require htmlFor="term">Select term</Label>
                    <Select
                        value={formState.term.value}
                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => addData('term', event.target.value)}
                        background="#f9f5e3"
                        placeholder="6 month"
                        name="term"
                    >
                        <option value="12">12 month</option>
                        <option value="18">18 month</option>
                        <option value="24">24 month</option>
                    </Select>
                </Box>

                <Box>
                    <Label require htmlFor="amount">Select amount</Label>
                    <NumberInput
                        value={formState.amount.value}
                        onChange={(valueAsString: string) => addData('amount', valueAsString)}
                        name="amount"
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
                        value={formState.email.value}
                        name="email"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => addData('email', event.target.value)}
                        type="email"
                        focusBorderColor="#5B35D5"
                        placeholder="test@gmail.com"
                        background="#f9f5e3"
                    />
                </Box>

                <Box>
                    <Label require htmlFor="birthdate">Your date of birth</Label>
                    <FormInput
                        value={formState.birthdate.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => addData('birthdate', event.target.value)}
                        name="birthdate"
                        placeholder="Select Date and Time"
                        focusBorderColor="#5B35D5"
                        errorBorderColor="#FF5631"
                        isInvalid={formState.birthdate.value.length === 0}
                        size="md"
                        type="date"
                        background="#f9f5e3"
                        textError="Enter your date of birth"
                        conditionForShowError={formState.birthdate.value.length === 0}
                    />
                </Box>

                <Box>
                    <Label require htmlFor="passportSeries">Your passport series</Label>
                    <FormInput
                        value={formState.passportSeries.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => addData('passportSeries', event.target.value)}
                        name="passportSeries"
                        type="number"
                        focusBorderColor="#5B35D5"
                        errorBorderColor="#FF5631"
                        isInvalid={formState.passportSeries.value.length < 4}
                        background="#f9f5e3"
                        placeholder="0000"
                        regExp={onlyNumbers}
                        textError="The series must be 4 digits"
                        conditionForShowError={formState.passportSeries.value.length < 4}
                    />
                </Box>

                <Box>
                    <Label require htmlFor="passportNumber">Your passport number</Label>
                    <FormInput
                        value={formState.passportNumber.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => addData('passportNumber', event.target.value)}
                        name="passportNumber"
                        type="number"
                        focusBorderColor="#5B35D5"
                        errorBorderColor="#FF5631"
                        isInvalid={formState.passportNumber.value.length < 6}
                        background="#f9f5e3"
                        placeholder="000000"
                        regExp={onlyNumbers}
                        textError="The number must be 6 digits"
                        conditionForShowError={formState.passportNumber.value.length < 6}
                    />
                </Box>

                <Flex justifyContent="flex-end" className={styles['Form-container__Button-block']}>
                    <Button
                        type="submit"
                        width="9.3rem"
                        background="blue"
                        colorText="white"
                    // disabled={!isCheckForm}
                    >
                        Continue
                    </Button>
                </Flex>
            </form>
        </Card >
    );
};
