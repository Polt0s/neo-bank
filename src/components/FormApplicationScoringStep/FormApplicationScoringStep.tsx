import {
    Box,
    Container,
    Flex,
    Heading,
    Select,
    Text
} from '@chakra-ui/react';

import { Card, FormInput, Label, Button } from 'shared';
import { onlyNumbers } from 'utils';

import type { FormikProps } from 'formik';

import styles from './FormApplicationScoringStep.module.css';

interface IFormApplicationScoringStep {
    formState: FormikProps<IFormApplicationScoringState>;
}

export const FormApplicationScoringStep = ({ formState }: IFormApplicationScoringStep) => {
    return (
        <Card style={{ marginBottom: 200 }}>
            <Flex gap={10} marginBottom="2rem">
                <Container margin={0} padding={0}>
                    <Flex marginBottom="2rem" justifyContent="space-between" alignItems="center">
                        <Heading size="lg">Customize your card</Heading>
                        <Text>Step 3 of 4</Text>
                    </Flex>
                </Container>
            </Flex>

            <form onSubmit={formState.handleSubmit}>
                <Container
                    margin={0}
                    padding={0}
                    maxWidth="100%"
                    className={styles['Form-container']}
                >
                    <Box>
                        <Label htmlFor="gender" require>What's your gender</Label>
                        <Select
                            value={formState.values.gender}
                            onChange={formState.handleChange}
                            background="#f9f5e3"
                            placeholder=""
                            name="gender"
                            id="gender"
                            focusBorderColor="#5B35D5"
                            isInvalid={(formState.touched.gender && Boolean(formState.errors.gender))}
                            errorBorderColor="#FF5631"
                            onBlur={formState.handleBlur}
                        >
                            <option />
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                        </Select>

                        {(formState.touched.gender && formState.errors.gender) ? (
                            <Text color="#FF5631">{formState.errors.gender}</Text>
                        ) : null}
                    </Box>

                    <Box>
                        <Label htmlFor="maritalStatus" require>What's your marital status</Label>
                        <Select
                            value={formState.values.maritalStatus}
                            onChange={formState.handleChange}
                            onBlur={formState.handleBlur}
                            background="#f9f5e3"
                            placeholder=""
                            name="maritalStatus"
                            id="maritalStatus"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={(formState.touched.maritalStatus && Boolean(formState.errors.maritalStatus))}
                        >
                            <option />
                            <option value="MARRIED">MARRIED</option>
                            <option value="DIVORCED">DIVORCED</option>
                            <option value="SINGLE">SINGLE</option>
                            <option value="WIDOW_WIDOWER">WIDOW WIDOWER</option>
                        </Select>

                        {(formState.touched.maritalStatus && formState.errors.maritalStatus) ? (
                            <Text color="#FF5631">{formState.errors.maritalStatus}</Text>
                        ) : null}
                    </Box>

                    <Box>
                        <Label htmlFor="dependentAmount" require>What's your marital status</Label>
                        <Select
                            value={formState.values.dependentAmount}
                            onChange={formState.handleChange}
                            onBlur={formState.handleBlur}
                            background="#f9f5e3"
                            placeholder=""
                            placeContent=""
                            name="dependentAmount"
                            id="dependentAmount"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={(formState.touched.dependentAmount && Boolean(formState.errors.dependentAmount))}
                        >
                            <option />
                            <option value="1">ONE</option>
                            <option value="2">TWO</option>
                            <option value="3">THREE</option>
                        </Select>

                        {(formState.touched.dependentAmount && formState.errors.dependentAmount) ? (
                            <Text color="#FF5631">{formState.errors.dependentAmount}</Text>
                        ) : null}
                    </Box>
                </Container>

                <Flex marginTop="1rem" gap={5} justifyContent="space-around">
                    <Box w="100%">
                        <Label htmlFor="passportIssueDate" require>Date of issue of the passport</Label>
                        <FormInput
                            value={formState.values.passportIssueDate}
                            onChange={formState.handleChange}
                            name="passportIssueDate"
                            id="passportIssueDate"
                            placeholder="Select Date and Time"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formState.errors.passportIssueDate)}
                            isFocus={formState.touched.passportIssueDate}
                            size="md"
                            background="#f9f5e3"
                            textError={formState.errors.passportIssueDate}
                            conditionForShowError={Boolean(formState.errors.passportIssueDate)}
                            onBlur={formState.handleBlur}
                            dateMask={true}
                        />
                    </Box>

                    <Box w="100%">
                        <Label htmlFor="passportIssueBranch" require>Division code</Label>
                        <FormInput
                            value={formState.values.passportIssueBranch}
                            onChange={formState.handleChange}
                            name="passportIssueBranch"
                            id="passportIssueBranch"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formState.errors.passportIssueBranch)}
                            isFocus={formState.touched.passportIssueBranch}
                            background="#f9f5e3"
                            placeholder="000000"
                            regExp={onlyNumbers}
                            textError={formState.errors.passportIssueBranch}
                            conditionForShowError={Boolean(formState.errors.passportIssueBranch)}
                            onBlur={formState.handleBlur}
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
                            value={formState.values.employmentStatus}
                            onChange={formState.handleChange}
                            onBlur={formState.handleBlur}
                            background="#f9f5e3"
                            placeholder=""
                            placeContent=""
                            name="employmentStatus"
                            id="employmentStatus"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={(formState.touched.employmentStatus && Boolean(formState.errors.employmentStatus))}
                        >
                            <option />
                            <option value="UNEMPLOYED">UNEMPLOYED</option>
                            <option value="SELF_EMPLOYED">SELF EMPLOYED</option>
                            <option value="EMPLOYED">EMPLOYED</option>
                            <option value="BUSINESS_OWNER">BUSINESS OWNER</option>

                        </Select>
                        {(formState.touched.employmentStatus && formState.errors.employmentStatus) ? (
                            <Text color="#FF5631">{formState.errors.employmentStatus}</Text>
                        ) : null}
                    </Box>

                    <Box>
                        <Label htmlFor="employerINN" require>Your employer INN</Label>
                        <FormInput
                            value={formState.values.employerINN}
                            onChange={formState.handleChange}
                            name="employerINN"
                            id="employerINN"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formState.errors.employerINN)}
                            isFocus={formState.touched.employerINN}
                            background="#f9f5e3"
                            placeholder="000000000000"
                            regExp={onlyNumbers}
                            textError={formState.errors.employerINN}
                            conditionForShowError={Boolean(formState.errors.employerINN)}
                            onBlur={formState.handleBlur}
                            maxLength={12}
                        />
                    </Box>

                    <Box>
                        <Label htmlFor="salary" require>Your salary</Label>
                        <FormInput
                            value={formState.values.salary}
                            onChange={formState.handleChange}
                            name="salary"
                            id="salary"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formState.errors.salary)}
                            isFocus={formState.touched.salary}
                            background="#f9f5e3"
                            placeholder="For example 100 000"
                            bigSum={true}
                            textError={formState.errors.salary}
                            conditionForShowError={Boolean(formState.errors.salary)}
                            onBlur={formState.handleBlur}
                            maxLength={10}
                        />
                    </Box>

                    <Box>
                        <Label htmlFor="position" require>Your position</Label>
                        <Select
                            value={formState.values.position}
                            onChange={formState.handleChange}
                            onBlur={formState.handleBlur}
                            background="#f9f5e3"
                            placeholder=""
                            placeContent=""
                            name="position"
                            id="position"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={(formState.touched.position && Boolean(formState.errors.position))}
                        >
                            <option />
                            <option value="WORKER">WORKER</option>
                            <option value="MID_MANAGER">MID MANAGER</option>
                            <option value="TOP_MANAGER">TOP MANAGER</option>
                            <option value="OWNER">OWNER</option>
                        </Select>

                        {(formState.touched.position && formState.errors.position) ? (
                            <Text color="#FF5631">{formState.errors.position}</Text>
                        ) : null}
                    </Box>

                    <Box>
                        <Label htmlFor="workExperienceTotal" require>Your work experience total</Label>
                        <FormInput
                            value={formState.values.workExperienceTotal}
                            onChange={formState.handleChange}
                            name="workExperienceTotal"
                            id="workExperienceTotal"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formState.errors.workExperienceTotal)}
                            isFocus={formState.touched.workExperienceTotal}
                            background="#f9f5e3"
                            placeholder="For example 10"
                            bigSum={true}
                            textError={formState.errors.workExperienceTotal}
                            conditionForShowError={Boolean(formState.errors.workExperienceTotal)}
                            onBlur={formState.handleBlur}
                            maxLength={2}
                        />
                    </Box>

                    <Box>
                        <Label htmlFor="workExperienceCurrent" require>Your work experience current</Label>
                        <FormInput
                            value={formState.values.workExperienceCurrent}
                            onChange={formState.handleChange}
                            name="workExperienceCurrent"
                            id="workExperienceCurrent"
                            type="text"
                            focusBorderColor="#5B35D5"
                            errorBorderColor="#FF5631"
                            isInvalid={Boolean(formState.errors.workExperienceCurrent)}
                            isFocus={formState.touched.workExperienceCurrent}
                            background="#f9f5e3"
                            placeholder="For example 2"
                            bigSum={true}
                            textError={formState.errors.workExperienceCurrent}
                            conditionForShowError={Boolean(formState.errors.workExperienceCurrent)}
                            onBlur={formState.handleBlur}
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

interface IFormApplicationScoringState {
    gender: string,
    maritalStatus: string,
    dependentAmount: string,
    passportIssueDate: string,
    passportIssueBranch: string,
    employmentStatus: string,
    employerINN: string,
    salary: string,
    position: string,
    workExperienceTotal: string,
    workExperienceCurrent: string
}
