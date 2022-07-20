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