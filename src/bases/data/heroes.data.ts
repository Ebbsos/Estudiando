export interface Hero {
    id: number;
    name: string;
    owner: Owner

}
// crea un objeto y estructura de datos
export enum Owner {
    DC= 'DC', //0
    Marvel= 'Marvel'//1
}
//type Owner = 'DC' | 'Marvel';
export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC,
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel,
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC,
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.Marvel,
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.DC,
    },

    {
        id: 6,
        name: 'Green lantern',
        owner: Owner.DC
    }
];

