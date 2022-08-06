export interface IGetAdminResponse {
    id: number;
    client: {
        firstName: string;
        lastName: string;
        middleName: string;
        email: string;
        gender: 'MALE' | 'FEMALE';
        birthdate: string | Date;
        passportSeries: string;
        passportNumber: string;
        passportIssueDate: string | Date;
        passportIssueBranch: number;
        maritalStatus: 'SINGLE';
        dependentAmount: number;
        employment: {
            employmentStatus: 'EMPLOYED';
            employerINN: number;
            salary: number;
            position: 'WORKER';
            workExperienceTotal: number;
            workExperienceCurrent: number;
        };
        account: number;
    };
    credit: {
        amount: number;
        term: number;
        monthlyPayment: number;
        rate: number;
        psk: number;
        isInsuranceEnabled: boolean;
        isSalaryClient: boolean;
        paymentSchedule: [
            {
                number: number;
                date: string;
                totalPayment: number;
                interestPayment: number;
                debtPayment: number;
                remainingDebt: number
            }
        ]
    };
    status: 'REQUEST_DENIED';
    creationDate: string | Date;
    signDate: string | Date;
    sesCode: number;
    statusHistory: [
        {
            status: 'REQUEST_DENIED';
            time: string | Date;
            changeType: 'AUTOMATIC'
        }
    ]
}
