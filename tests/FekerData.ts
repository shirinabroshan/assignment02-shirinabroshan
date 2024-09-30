import { faker } from "@faker-js/faker";

//post
export const generateRandomPostpaylod = () => {
    return {
        username: faker.internet.userName(),
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    }
};

export const createnewcar = () => {
    return {
        pricePerDay: -1093,
        fabric: "Nissan",
        model: "Jock",
        registrationNumber: faker.string.alphanumeric(),
        isBooked: false
    }
};

//Update
export const updateCustomerData = () => {
    return {
        "id": 1,
        username: faker.internet.userName(),
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    };
}

export const updatecarF = () => {
    return {
        id: 2,
        pricePerDay: -1093,
        fabric: "Nissan",
        model: "Life",
        registrationNumber: faker.string.alphanumeric(),
        isBooked: false
    }
}

//Delete
export const deletecarid = () => {
    return { "id": 3, };
}


export const deletecustomeridF = () => {
    return { "id": 3, };
}


