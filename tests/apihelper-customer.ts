import { APIRequestContext } from "@playwright/test";
import { url_get_cars } from './Urler';
import { updateCustomerData } from "./FekerData";
import * as testUrl from './Urler';

export class APIHelperCustomer {
    private url_get_cars: string;


    constructor(testUrl: string,) {
        this.url_get_cars = url_get_cars;
    }
    //Get cars från customer panel
    async getCars(request: APIRequestContext) {
        const respnse = await request.get(`${this.url_get_cars}`)
        return respnse;
    }
}