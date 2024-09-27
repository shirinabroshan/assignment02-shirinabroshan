import { faker } from "@faker-js/faker";

export const generateRandomPostpaylod = () => {

    return {
        username: faker.internet.userName(),
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    }
};

export const updateCustomerData = () => {
    return {
        "id": 1,
        username: "karin",
        name: "olofson",
        address: "centrum 20",
        email: "silvian@example.com",
        phoneNumber: "090000001"
    };
}

export const deletecarid = () => {
    return { "id": 2, };
}


