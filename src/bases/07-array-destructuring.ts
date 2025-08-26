const characterNames = ['Goku', 'Pedro', 'Juan', 'Eve'];
//const [,,p3] = characterNames;
//console.log(p3);
//---tarea
const useState = (Value: string) => {

    return [Value, (NexValue: string) => {
        console.log(NexValue);

    }] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegata');
