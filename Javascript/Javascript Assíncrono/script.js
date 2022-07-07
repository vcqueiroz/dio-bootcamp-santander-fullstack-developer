//Assíncrono: Que não ocorre ou não se efetiva ao mesmo tempo.
//O Javascript roda de maneira síncrona

//Promises: Objeto de processamento assíncrono
//Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitado.
//Uma promise pode ter 3 estados
//1)Pending 2)Fullfilled 3)Rejected

const myPromise = new Promise((resolve, rejected) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida'));
    }, 2000);
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));
//Após dois segundos retornará o valor 


//Async/await
async function resolvePromise() {
    const myPromise = new Promise((resolve, rejected) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida'));
        }, 3000);
});

const resolved = await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

    return resolved;
}