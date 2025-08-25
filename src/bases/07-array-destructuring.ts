const characterNames= ['Goku','Pedro','Juan', 'Eve'];
//const [,,p3] = characterNames;
//console.log(p3);
    //---tarea
    function useState (FirstName:string){

        return [FirstName,(name:string)=>{
            console.log(name);
            
        }] as const;
    }

    const [name, setName] = useState('Goku');
    console.log(name);
    setName('Vegata');
