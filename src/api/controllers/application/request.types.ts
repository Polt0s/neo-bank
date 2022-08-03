import type { IPostApplicationResponse } from './response.types';

export interface IPostApplicationRequest {
    items: {
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
}

export interface IPostApplicationRegistrationRequest {
    items: {
        gender: 'MALE' | 'FEMALE' | string;
        maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER' | string; // улучшить способ индексации
        dependentAmount: number; // сколько иждевенцев
        passportIssueDate: string;
        passportIssueBranch: string;
        employment: { // информация о занятости
            employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER' | string,
            employerINN: number,
            salary: number,
            position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER' | string,
            workExperienceTotal: number,
            workExperienceCurrent: number
        },
        account: number; // hard code
    }
    applicationId: number;
}

export interface IPostApplicationApplyRequest {
    items: Omit<IPostApplicationResponse, 'uniqueId'>;
}
