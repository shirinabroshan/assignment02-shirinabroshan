import { APIRequestContext } from "@playwright/test";
import { url_get_orders, url_get_customers, url_create_customer, url_update_customer, url_delete_car, url_create_car, url_update_car, url_delete_customer } from './Urler';
import * as testUrl from './Urler';
import { updateCustomerData } from "./FekerData";
export class APIHelper {
    private baseUrl: string;
    private url_get_orders: string;
    private url_get_customers: string;
    private url_create_customer: string;
    private url_update_customer: string;
    private url_delete_car: string;
    private url_create_car: string;
    private url_update_car: string;
    private url_delete_customer: string;


    constructor(testUrl: string,) {
        this.url_get_orders = url_get_orders;
        this.url_get_customers = url_get_customers;
        this.url_create_customer = url_create_customer;
        this.url_update_customer = url_update_customer;
        this.url_delete_car = url_delete_car;
        this.url_create_car = url_create_car;
        this.url_update_car = url_update_car;
        this.url_delete_customer = url_delete_customer;
    }




    //Get Orders 
    async getOrders(request: APIRequestContext) {
        const respnse = await request.get(`${this.url_get_orders}`)
        return respnse;
    }

    //Get customers
    async getCustomers(request: APIRequestContext) {
        const response = await request.get(`${this.url_get_customers}`)
        return response;
    }

    //POST
    async createCustomer(request: APIRequestContext, payload: object) {
        const response = await request.post(`${this.url_create_customer}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }

    async createCar(request: APIRequestContext, payload: object) {
        const response = await request.post(`${this.url_create_car}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }


    //PUT
    async updateCustomer(request: APIRequestContext, payload: object) {
        const response = await request.put(`${this.url_update_customer}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }

    async updateCarH(request: APIRequestContext, payload: object) {
        const response = await request.put(`${this.url_update_car}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }

    //DELETE
    async deleteCustomerH(request: APIRequestContext, payload: object) {
        const response = await request.delete(`${this.url_delete_customer}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }

    async deleteCar(request: APIRequestContext, payload: object) {
        const response = await request.delete(`${this.url_delete_car}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }

}
