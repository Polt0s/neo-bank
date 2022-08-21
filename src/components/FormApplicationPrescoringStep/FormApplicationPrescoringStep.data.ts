import { Select } from '@chakra-ui/react';

import { FormInput } from 'shared';
import { onlyNumbers } from 'utils';

import type { HTMLInputTypeAttribute } from 'react';
import type { SelectField } from '@chakra-ui/react';

interface IFieldOptions {
    component: TComponent;
    key: TKey;
    label: string;
    type?: HTMLInputTypeAttribute;
    placeholder: string;
    options?: TSelectOptions[];
    maxLength?: number;
    regExp?: RegExp;
}

const fieldOptions: IFieldOptions[] = [
    {
        component: FormInput,
        key: 'lastName',
        label: 'Your last name',
        type: 'text',
        placeholder: 'For example Doe'

    },
    {
        component: FormInput,
        key: 'firstName',
        label: 'Your first name',
        type: 'text',
        placeholder: 'For example Josh'
    },
    {
        component: FormInput,
        key: 'middleName',
        label: 'Your patronymic',
        type: 'text',
        placeholder: 'For example Petrovich'
    },
    {
        component: Select,
        key: 'term',
        label: 'Select term',
        placeholder: '6 month',
        options: [
            { value: '12', name: '12 month' },
            { value: '18', name: '18 month' },
            { value: '24', name: '24 month' },
        ]
    },
    {
        component: FormInput,
        key: 'email',
        label: 'Your email',
        type: 'email',
        placeholder: 'test@gmail.com'
    },
    {
        component: FormInput,
        key: 'birthdate',
        label: 'Your date of birth',
        placeholder: 'Select Date and Time'
    },
    {
        component: FormInput,
        key: 'passportSeries',
        label: 'Your passport series',
        type: 'text',
        placeholder: '0000',
        maxLength: 4,
        regExp: onlyNumbers
    },
    {
        component: FormInput,
        key: 'passportNumber',
        label: 'Your passport number',
        type: 'text',
        placeholder: '000000',
        maxLength: 6,
        regExp: onlyNumbers
    },
];

export { fieldOptions };

type TComponent = typeof FormInput | typeof SelectField;
type TKey = 'term' | 'firstName' | 'lastName' | 'middleName' | 'email' | 'birthdate' | 'passportSeries' | 'passportNumber';
type TSelectOptions = {
    value: string;
    name: string;
}
