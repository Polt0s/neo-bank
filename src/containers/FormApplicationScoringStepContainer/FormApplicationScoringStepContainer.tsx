import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';

import { applicationAPI } from 'api';
import { FormApplicationScoringStep } from 'components';

import { checkBirthdate, reverseBirthdate, withoutSpaces } from 'utils';

import type { IPostApplicationRegistrationRequest } from 'api';

export const FormApplicationScoringStepContainer = () => {
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

            console.log(result);
            // mutate({ items: result, applicationId: 2  });
        }
    });

    const { mutate, isLoading } = useMutation((values: IPostApplicationRegistrationRequest) =>
        applicationAPI.putApplicationRegistration(values));

    return (
        <>
            <FormApplicationScoringStep formState={formik} />
        </>
    );
};
