import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { APIHelper } from './apiHelpers-admin';
import * as testUrl from './Urler';

import { deletecarid, generateRandomPostpaylod, updateCustomerData } from './FekerData';

test.describe('Test suite car-rental', () => {
  test('test 01 get orders-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_get_orders);
    const getOrders = await apiHelper.getOrders(request);
    expect(getOrders.ok()).toBeTruthy();
  });

  test('test 02 get customers-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_get_customers);
    const getCustomers = await apiHelper.getCustomers(request);
    expect(getCustomers.status()).toBe(200);
  });

  test('test 04 create customers-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_create_customer);
    const payload = generateRandomPostpaylod();
    const createCustomerResponse = await apiHelper.createCustomer(request, payload);
    expect(createCustomerResponse.status()).toBe(201);
  });

  test('test 06 updatecustomer-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_update_customer);
    const payload = updateCustomerData();
    const updatecustomerResponse = await apiHelper.updateCustomer(request, payload);
    expect(updatecustomerResponse.ok()).toBeTruthy();
    expect(updatecustomerResponse.status()).toBe(200);
  });

  test('test 09 delete car-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_delete_car);
    const payload = deletecarid();
    const deletcaridResponse = await apiHelper.deleteCar(request, payload);
    expect(deletcaridResponse.ok()).toBeTruthy();
    expect(deletcaridResponse.status()).toBe(200);
  });

});




