import {
    Box,
    Container,
    Flex,
    Heading,
    Select,
    Text
} from '@chakra-ui/react';
import { useFormik } from 'formik';

import {
    Card,
    FormInput,
    Label,
    Button
} from 'shared';
import {
    checkBirthdate,
    onlyNumbers,
    reverseBirthdate,
    withoutSpaces
} from 'utils';

import type { IPostApplicationRegistrationRequest } from 'api'; // вынести в types

import styles from './FormApplicationScoringStep.module.css';

interface IFormApplicationScoringStep {
    onSubmit: (values: Omit<IPostApplicationRegistrationRequest, 'applicationId'>) => void;
}

export const FormApplicationScoringStep = ({ onSubmit }: IFormApplicationScoringStep) => {
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
        <Card style={{ marginBottom: '2rem' }}>
            <Flex gap={10} marginBottom="2rem">
                <Container margin={0} padding={0}>
                    <Flex
                        marginBottom="2rem"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Heading size="lg">Continuation of the application</Heading>
                        <Text>Step 2 of 5</Text>
                    </Flex>
                </Container>
            </Flex>

            <form onSubmit={formik.handleSubmit}>
                <Container
                    margin={0}
                    padding={0}
                    maxWidth="100%"
                    className={styles['Form-container']}
                >
                    <Box>
                        <Label htmlFor="gender" require>What's your gender</Label>
                        <Select
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            background="#f9f5e3"
                            placeholder=""
                            name="gender"
                            id="gender"
                            focusBorderColor="#5B35D5"
                            isInvalid={(formik.touched.gender && Boolean(formik.errors.gender))}
                            errorBorderColor="#FF5631"
                            onBlur={formik.handleBlur}
                        >
                            <option />
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                        </Select>

                        {(formik.touched.gender && formik.errors.gender) ? (
                            <Text color="#FF5631">{formik.errors.gender}</Text>
                        ) : null}
                    </Box>

                    <Box>
                        <Label htmlFor="maritalStatus" require>Your marital status</Label>
                        <Select
                            value={formik.values.maritalStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            background="#f9f5e3"
                            placeholder=""
                            name="maritalStatus"
                            id="maritalStatus"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={(formik.touched.maritalStatus && Boolean(formik.errors.maritalStatus))}
                        >
                            <option />
                            <option value="MARRIED">MARRIED</option>
                            <option value="DIVORCED">DIVORCED</option>
                            <option value="SINGLE">SINGLE</option>
                            <option value="WIDOW_WIDOWER">WIDOW WIDOWER</option>
                        </Select>

                        {(formik.touched.maritalStatus && formik.errors.maritalStatus) ? (
                            <Text color="#FF5631">{formik.errors.maritalStatus}</Text>
                        ) : null}
                    </Box>

                    <Box>
                        <Label htmlFor="dependentAmount" require>Your number of dependents</Label>
                        <Select
                            value={formik.values.dependentAmount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            background="#f9f5e3"
                            placeholder=""
                            name="dependentAmount"
                            id="dependentAmount"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={(formik.touched.dependentAmount && Boolean(formik.errors.dependentAmount))}
                        >
                            <option />
                            <option value="0">ZERO</option>
                            <option value="1">ONE</option>
                            <option value="2">TWO</option>
                            <option value="3">THREE</option>
                        </Select>

                        {(formik.touched.dependentAmount && formik.errors.dependentAmount) ? (
                            <Text color="#FF5631">{formik.errors.dependentAmount}</Text>
                        ) : null}
                    </Box>
                </Container>

                <Flex marginTop="1rem" gap={5} justifyContent="space-around">
                    <Box w="100%">
                        <Label htmlFor="passportIssueDate" require>Date of issue of the passport</Label>
                        <FormInput
                            value={formik.values.passportIssueDate}
                            onChange={formik.handleChange}
                            name="passportIssueDate"
                            id="passportIssueDate"
                            placeholder="Select Date and Time"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formik.errors.passportIssueDate)}
                            isFocus={formik.touched.passportIssueDate}
                            size="md"
                            background="#f9f5e3"
                            textError={formik.errors.passportIssueDate}
                            conditionForShowError={Boolean(formik.errors.passportIssueDate)}
                            onBlur={formik.handleBlur}
                            dateMask={true}
                        />
                    </Box>

                    <Box w="100%">
                        <Label htmlFor="passportIssueBranch" require>Division code</Label>
                        <FormInput
                            value={formik.values.passportIssueBranch}
                            onChange={formik.handleChange}
                            name="passportIssueBranch"
                            id="passportIssueBranch"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formik.errors.passportIssueBranch)}
                            isFocus={formik.touched.passportIssueBranch}
                            background="#f9f5e3"
                            placeholder="000000"
                            regExp={onlyNumbers}
                            textError={formik.errors.passportIssueBranch}
                            conditionForShowError={Boolean(formik.errors.passportIssueBranch)}
                            onBlur={formik.handleBlur}
                            maxLength={6}
                        />
                    </Box>
                </Flex>

                <Heading size="md" margin="2rem 0">Employment</Heading>

                <Container
                    margin={0}
                    padding={0}
                    maxWidth="100%"
                    className={styles['Form-employment']}
                >
                    <Box>
                        <Label htmlFor="employmentStatus" require>Your employment status</Label>
                        <Select
                            value={formik.values.employmentStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            background="#f9f5e3"
                            placeholder=""
                            placeContent=""
                            name="employmentStatus"
                            id="employmentStatus"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={(formik.touched.employmentStatus && Boolean(formik.errors.employmentStatus))}
                        >
                            <option />
                            <option value="UNEMPLOYED">UNEMPLOYED</option>
                            <option value="SELF_EMPLOYED">SELF EMPLOYED</option>
                            <option value="EMPLOYED">EMPLOYED</option>
                            <option value="BUSINESS_OWNER">BUSINESS OWNER</option>

                        </Select>
                        {(formik.touched.employmentStatus && formik.errors.employmentStatus) ? (
                            <Text color="#FF5631">{formik.errors.employmentStatus}</Text>
                        ) : null}
                    </Box>

                    <Box>
                        <Label htmlFor="employerINN" require>Your employer INN</Label>
                        <FormInput
                            value={formik.values.employerINN}
                            onChange={formik.handleChange}
                            name="employerINN"
                            id="employerINN"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formik.errors.employerINN)}
                            isFocus={formik.touched.employerINN}
                            background="#f9f5e3"
                            placeholder="000000000000"
                            regExp={onlyNumbers}
                            textError={formik.errors.employerINN}
                            conditionForShowError={Boolean(formik.errors.employerINN)}
                            onBlur={formik.handleBlur}
                            maxLength={12}
                        />
                    </Box>

                    <Box>
                        <Label htmlFor="salary" require>Your salary</Label>
                        <FormInput
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            name="salary"
                            id="salary"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formik.errors.salary)}
                            isFocus={formik.touched.salary}
                            background="#f9f5e3"
                            placeholder="For example 100 000"
                            bigSum={true}
                            textError={formik.errors.salary}
                            conditionForShowError={Boolean(formik.errors.salary)}
                            onBlur={formik.handleBlur}
                            maxLength={10}
                        />
                    </Box>

                    <Box>
                        <Label htmlFor="position" require>Your position</Label>
                        <Select
                            value={formik.values.position}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            background="#f9f5e3"
                            placeholder=""
                            placeContent=""
                            name="position"
                            id="position"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={(formik.touched.position && Boolean(formik.errors.position))}
                        >
                            <option />
                            <option value="WORKER">WORKER</option>
                            <option value="MID_MANAGER">MID MANAGER</option>
                            <option value="TOP_MANAGER">TOP MANAGER</option>
                            <option value="OWNER">OWNER</option>
                        </Select>

                        {(formik.touched.position && formik.errors.position) ? (
                            <Text color="#FF5631">{formik.errors.position}</Text>
                        ) : null}
                    </Box>

                    <Box>
                        <Label htmlFor="workExperienceTotal" require>Your work experience total</Label>
                        <FormInput
                            value={formik.values.workExperienceTotal}
                            onChange={formik.handleChange}
                            name="workExperienceTotal"
                            id="workExperienceTotal"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formik.errors.workExperienceTotal)}
                            isFocus={formik.touched.workExperienceTotal}
                            background="#f9f5e3"
                            placeholder="For example 10"
                            bigSum={true}
                            textError={formik.errors.workExperienceTotal}
                            conditionForShowError={Boolean(formik.errors.workExperienceTotal)}
                            onBlur={formik.handleBlur}
                            maxLength={2}
                        />
                    </Box>

                    <Box>
                        <Label htmlFor="workExperienceCurrent" require>Your work experience current</Label>
                        <FormInput
                            value={formik.values.workExperienceCurrent}
                            onChange={formik.handleChange}
                            name="workExperienceCurrent"
                            id="workExperienceCurrent"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formik.errors.workExperienceCurrent)}
                            isFocus={formik.touched.workExperienceCurrent}
                            background="#f9f5e3"
                            placeholder="For example 2"
                            bigSum={true}
                            textError={formik.errors.workExperienceCurrent}
                            conditionForShowError={Boolean(formik.errors.workExperienceCurrent)}
                            onBlur={formik.handleBlur}
                            maxLength={2}
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
        </Card>
    );
};
