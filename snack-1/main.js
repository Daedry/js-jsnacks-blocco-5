/* 
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

const zucchine = [
    {
        varieta: 'faenza',
        peso: 10,
        lunchezze: 10,
    },

    {
        varieta: 'faenza',
        peso: 30,
        lunchezze: 15,
    },

    {
        varieta: 'faenza',
        peso: 50,
        lunchezze: 25,
    },

    {
        varieta: 'faenza',
        peso: 40,
        lunchezze: 12,
    },

    {
        varieta: 'faenza',
        peso: 20,
        lunchezze: 11,
    },

    {
        varieta: 'faenza',
        peso: 20,
        lunchezze: 30,
    },

    {
        varieta: 'faenza',
        peso: 20,
        lunchezze: 15,
    },

    {
        varieta: 'faenza',
        peso: 30,
        lunchezze: 25,
    },

    {
        varieta: 'faenza',
        peso: 20,
        lunchezze: 13,
    },

    {
        varieta: 'faenza',
        peso: 10,
        lunchezze: 15,
    }
]

let sum = 0;

zucchine.forEach(zucchina => {
    // console.log(zucchina.peso);
    const peso = zucchina.peso
    sum += peso;
})

console.log(sum)