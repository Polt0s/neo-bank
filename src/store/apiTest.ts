import axios from 'axios';
import { makeAutoObservable } from 'mobx';

export const getApiUsers = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        apiTest.getUsers(response.data);
    } catch (err) {
        console.log(err);
    }
};

class ApiTest {
    users = [];

    constructor() {
        makeAutoObservable(this);
    }

    getUsers(data: any) {
        this.users = data;
        return this.users;
    }
}

export const apiTest = new ApiTest();
