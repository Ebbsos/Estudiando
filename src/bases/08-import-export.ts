import { heroes, type Hero, Owner } from "./data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    //heroes tiene todo el JSON
    //trae las coincidencias y guarda en hero
    const hero = heroes.find((x) => {
        return x.id === id
        // te dice si hay una coincidencia
    });

    //retorna el objeto
    return hero


}
//mandamos el id que buscamos, e imprimimos
//console.log(getHeroById(5));


//---- tarea


export const getHeroeByOwner = (theOwner: Owner): Hero | undefined => {

   const hero = heroes.filter((hero)=>{
    return hero.owner === theOwner
   })
  return hero
}
