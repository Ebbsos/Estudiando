import type { GiphyRandomResponse, Gif } from "./data/giphy.response";

const API_KEY = 'RaooYnDxcb7SFksLK6bODrFoPyZLwIm4';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

myRequest
    .then((response) => response.json())
    // todo lo que me pasa la api se va en data
    .then(({ data }: GiphyRandomResponse) => {

        const imageUrl = data.images.original.url;

        // const imageUrl = data.data.images.original.url;
        console.log('PROBANDOO', imageUrl);

        //agarra el git
        //convierte en elemento
        const imgElement = document.createElement('img');
        //le asigna src
        // es como hacer <img scr "dfd;kfmdl;f">
        imgElement.src = imageUrl

        // muestra en la vista
        document.body.append(imgElement)

    })
    .catch(err => {

        console.log(err);

    })