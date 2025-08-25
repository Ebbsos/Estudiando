const person = {
    name: 'Tony',
    age: 45,
    key: 'IronMan'
}

//const { name, age, key } = person;
/* const name = person.name;
const age = person.age
const key = person.key */
//console.log('probando',name, age, key);


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

//funcion quer tiene una desestructuracion
const useContext = ({ key, name, age, rank }: Hero) => {

    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,

    };
};

const {rank,keyName, user} = useContext(person);
const {name}= user;

//const context = useContext(person);

console.log({rank, keyName, name});
