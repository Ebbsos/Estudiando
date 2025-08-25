

function greet(name: string): string {
    return `HOla ${name}`
}

const greet2 = (name: string): string => `Greet2 ${name}`


//reasignando una funcion
// greet = function(){
//     return 'hola';
// };
const message = greet('Goku')
const message2 = greet2('Pedro')


//console.log(message);
//console.log(message2);

interface user {
    uid: string,
    userName: string
}
function getUser() {
    return {
        uid: 'ABC-123',
        userName: 'ebbsos'
    }
}

const getUserFlecha = (): user => ({

    uid: 'CDE-456',
    userName: 'sosabb',

})


const user = getUserFlecha();
console.log(user);

//imprimir cada elemento del arreglo
 const myNumber: number[] = [1, 2, 3, 4, 5];
/* myNumber.forEach(function (value) {
    console.log({value});
}) */ 

// imprimir desde una funcion flecha
myNumber.forEach(
    console.log
)