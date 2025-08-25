interface person {
    firstName: string;
    lastName: string;
    age: number;
    address: addres;
}

interface addres {
    postalCode: number;
    city: string;
}

const ironman: person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 123123,
        city: 'Ciudad del Este',
    }
};

const spiderman = structuredClone(ironman);
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';

console.log({ ironman, spiderman });
