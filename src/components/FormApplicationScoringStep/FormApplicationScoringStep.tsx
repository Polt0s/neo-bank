import React from 'react';
import {
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Select,
    Text
} from '@chakra-ui/react';
import { useFormik } from 'formik';

import {
    Card,
    Label,
    Button
} from 'shared';
import {
    checkBirthdate,
    reverseBirthdate,
    uniqueId,
    withoutSpaces
} from 'utils';
import { ThemeContext } from 'context';

import { fieldOptions } from './FormApplicationScoringStep.data';

import styles from './FormApplicationScoringStep.module.css';

import type { IPostApplicationRegistrationRequest } from 'api';


interface IFormApplicationScoringStep {
    onSubmit: (values: Omit<IPostApplicationRegistrationRequest, 'applicationId'>) => void;
}

export const FormApplicationScoringStep = ({ onSubmit }: IFormApplicationScoringStep) => {
    const { stateTheme } = React.useContext(ThemeContext);
    const formik = useFormik({
        initialValues: {
            gender: '',
            maritalStatus: '',
            dependentAmount: '',
            passportIssueDate: '',
            passportIssueBranch: '',
            employmentStatus: '',
            employerINN: '',
            salary: '',
            position: '',
            workExperienceTotal: '',
            workExperienceCurrent: ''
        },
        validate: (values) => {
            const errors: Record<string, string> = {};

            if (!values.gender.length) {
                errors.gender = 'Select one of the options';
            }

            if (!values.maritalStatus.length) {
                errors.maritalStatus = 'Select one of the options';
            }

            if (!values.dependentAmount.length) {
                errors.dependentAmount = 'Select one of the options';
            }

            if (!checkBirthdate.test(values.passportIssueDate) || values.passportIssueDate.length < 10) {
                errors.passportIssueDate = 'Incorrect date of passport issue date';
            }

            if (values.passportIssueBranch.length < 6) {
                errors.passportIssueBranch = 'The series must be 6 digits';
            }

            if (!values.employmentStatus.length) {
                errors.employmentStatus = 'Select one of the options';
            }

            if (values.employerINN.length < 12) {
                errors.employerINN = 'Department code must be 12 digits';
            }

            if (!values.salary.length) {
                errors.salary = 'Enter your salary';
            }

            if (!values.position.length) {
                errors.position = 'Select one of the options';
            }

            if (!values.workExperienceTotal.length) {
                errors.workExperienceTotal = 'Enter your work experience total';
            }

            if (!values.workExperienceCurrent.length) {
                errors.workExperienceCurrent = 'Enter your work experience current';
            }

            return errors;

        },
        validateOnBlur: true,
        onSubmit: (values) => {
            const result = {
                gender: values.gender,
                maritalStatus: values.maritalStatus,
                dependentAmount: Number(values.dependentAmount),
                passportIssueDate: reverseBirthdate(values.passportIssueDate),
                passportIssueBranch: values.passportIssueBranch,
                employment: {
                    employmentStatus: values.employmentStatus,
                    employerINN: Number(values.employerINN),
                    salary: Number(values.salary.replace(withoutSpaces, '')),
                    position: values.position,
                    workExperienceTotal: Number(values.workExperienceTotal),
                    workExperienceCurrent: Number(values.workExperienceCurrent)
                },
                account: 11223344556677889900,
            };

            onSubmit({ items: result });
        }
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
                        <Heading size="lg" color={stateTheme.color}>Continuation of the application</Heading>
                        <Text color={stateTheme.secondaryColor}>Step 2 of 5</Text>
                    </Flex>
                </Container>
            </Flex>

            <form onSubmit={formik.handleSubmit}>
                <Grid
                    templateRows="repeat(6, 1fr)"
                    templateColumns="repeat(12, 1fr)"
                    gap="0rem 1rem"
                >
                    {fieldOptions.map((field) => (
                        <React.Fragment key={field.key}>
                            {field.key === 'employmentStatus' && (
                                <GridItem
                                    rowSpan={1}
                                    colSpan={12}
                                    alignSelf="center"
                                >
                                    <Heading size="md" color={stateTheme.color}>Employment</Heading>
                                </GridItem>
                            )}
                            <GridItem rowSpan={1} colSpan={field.spanColumn}>
                                <Label
                                    htmlFor={field.key}
                                    require
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
                                        dateMask={field.key === 'passportIssueDate'}
                                        maxLength={field.maxLength}
                                        regExp={field.regExp}
                                        bigSum={field.key === 'salary'}
                                        errorColor={stateTheme.errorColor}
                                    />
                                ) : (
                                    <React.Fragment>
                                        <field.component
                                            value={formik.values[field.key]}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            background="#f9f5e3"
                                            placeholder={field.placeholder}
                                            name={field.key}
                                            id={field.key}
                                            focusBorderColor="#5B35D5"
                                            errorBorderColor="#FF5631"
                                            isInvalid={(formik.touched[field.key] && Boolean(formik.errors[field.key]))}
                                        >
                                            {field.options?.map((selectOption) => (
                                                <option key={uniqueId()} value={selectOption.value}>
                                                    {selectOption.name}
                                                </option>
                                            ))}
                                        </field.component>

                                        {(formik.touched[field.key] && formik.errors[field.key]) && (
                                            <Text color={stateTheme.errorColor}>
                                                {formik.errors[field.key]}
                                            </Text>
                                        )}
                                    </React.Fragment>
                                )}
                            </GridItem>
                        </React.Fragment>
                    ))}

                    <GridItem
                        rowSpan={1}
                        colSpan={12}
                        marginTop="1.5rem"
                        justifySelf="end"
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
                    </GridItem>
                </Grid>
            </form>
        </Card>
    );
};
