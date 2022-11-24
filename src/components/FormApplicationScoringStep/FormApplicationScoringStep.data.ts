import { Select } from '@chakra-ui/react';

import { FormInput } from 'shared';

import { onlyNumbers } from 'utils';

import type { SelectField } from '@chakra-ui/react';
import type { HTMLInputTypeAttribute } from 'react';

interface IFieldOptions {
    component: TComponent;
    key: TKey;
    label: string;
    type?: HTMLInputTypeAttribute;
    placeholder: string;
    options?: TSelectOptions[];
    maxLength?: number;
    regExp?: RegExp;
    spanColumn: number;
}

const fieldOptions: IFieldOptions[] = [
    {
        component: Select,
        key: 'gender',
        label: 'What\'s your gender',
        placeholder: '',
        options: [
            { value: '', name: '' },
            { value: 'MALE', name: 'MALE' },
            { value: 'FEMALE', name: 'FEMALE' }
        ],
        spanColumn: 4,
    },
    {
        component: Select,
        key: 'maritalStatus',
        label: 'Your marital status',
        placeholder: '',
        options: [
            { value: '', name: '' },
            { value: 'MARRIED', name: 'MARRIED' },
            { value: 'DIVORCED', name: 'DIVORCED' },
            { value: 'SINGLE', name: 'SINGLE' },
            { value: 'WIDOW_WIDOWER', name: 'WIDOW WIDOWER' },
        ],
        spanColumn: 4,
    },
    {
        component: Select,
        key: 'dependentAmount',
        label: 'Your number of dependents',
        placeholder: '',
        options: [
            { value: '', name: '' },
            { value: '0', name: 'ZERO' },
            { value: '1', name: 'ONE' },
            { value: '2', name: 'TWO' },
            { value: '3', name: 'THREE' },
        ],
        spanColumn: 4,
    },
    {
        component: FormInput,
        key: 'passportIssueDate',
        label: 'Date of issue of the passport',
        placeholder: 'Select Date and Time',
        spanColumn: 6,
    },
    {
        component: FormInput,
        key: 'passportIssueBranch',
        label: 'Division code',
        placeholder: '000000',
        type: 'text',
        regExp: onlyNumbers,
        maxLength: 6,
        spanColumn: 6,
    },
    {
        component: Select,
        key: 'employmentStatus',
        label: 'Your employment status',
        placeholder: '',
        options: [
            { value: '', name: '' },
            { value: 'UNEMPLOYED', name: 'UNEMPLOYED' },
            { value: 'SELF_EMPLOYED', name: 'SELF EMPLOYED' },
            { value: 'EMPLOYED', name: 'EMPLOYED' },
            { value: 'BUSINESS_OWNER', name: 'BUSINESS OWNER' },
        ],
        spanColumn: 4
    },
    {
        component: FormInput,
        key: 'employerINN',
        label: 'Your employer INN',
        placeholder: '000000000000',
        spanColumn: 4,
        regExp: onlyNumbers,
        maxLength: 12,
        type: 'text'
    },
    {
        component: FormInput,
        key: 'salary',
        label: 'Your salary',
        placeholder: 'For example 100 000',
        spanColumn: 4,
        maxLength: 10
    },
    {
        component: Select,
        key: 'position',
        label: 'Your position',
        placeholder: '',
        options: [
            { value: '', name: '' },
            { value: 'WORKER', name: 'WORKER' },
            { value: 'MID_MANAGER', name: 'MID MANAGER' },
            { value: 'TOP_MANAGER', name: 'TOP MANAGER' },
            { value: 'OWNER', name: 'OWNER' },
        ],
        spanColumn: 4
    },
    {
        component: FormInput,
        key: 'workExperienceTotal',
        label: 'Your work experience total',
        placeholder: 'For example 10',
        maxLength: 2,
        spanColumn: 4,
        type: 'text',
        regExp: onlyNumbers,
    },
    {
        component: FormInput,
        key: 'workExperienceCurrent',
        label: 'Your work experience current',
        placeholder: 'For example 4',
        maxLength: 2,
        spanColumn: 4,
        type: 'text',
        regExp: onlyNumbers,
    }
];

export { fieldOptions };

type TComponent = typeof FormInput | typeof SelectField;
type TKey = 'gender'
    | 'maritalStatus'
    | 'dependentAmount'
    | 'passportIssueDate'
    | 'passportIssueBranch'
    | 'employmentStatus'
    | 'employerINN'
    | 'salary'
    | 'position'
    | 'workExperienceTotal'
    | 'workExperienceCurrent';
type TSelectOptions = {
    value: string;
    name: string;
}