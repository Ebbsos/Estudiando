const myPromise = new Promise((resolve, reject) => {
    console.log('Entrando');

    setTimeout(() => {
        //!Yo quiero el dinero!!
        reject('Mi amigo se perdio');
    }, 2000);// 2 segundos

}
);


myPromise.then(
    myMoney => {
        console.log(`Tengo mi dinero ${myMoney}`);
    }
)
    .catch((reason) => {
        console.log(reason);

    })
    .finally(() => {
        console.log("Pues a seguir con mi vida");

    });

    