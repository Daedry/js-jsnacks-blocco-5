/* 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [
    {
        varieta: 'faenza',
        peso: 10,
        lunghezza: 10,
    },

    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 45,
    },

    {
        varieta: 'faenza',
        peso: 50,
        lunghezza: 25,
    },

    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 12,
    },

    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 11,
    },

    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 30,
    },

    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 14,
    },

    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 25,
    },

    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 13,
    },

    {
        varieta: 'faenza',
        peso: 10,
        lunghezza: 10,
    }
]

const lunghezzaZucchina15 = zucchine.filter(zucchina => zucchina.lunghezza < 15);
console.log(lunghezzaZucchina15);


let sum = 0;
lunghezzaZucchina15.forEach(zucchina => {
    sum += zucchina.peso
})

console.log(sum)



const lunghezzaZucchina_over15 = zucchine.filter(zucchina => zucchina.lunghezza > 15);
console.log(lunghezzaZucchina_over15);

let sum_over15 = 0;
lunghezzaZucchina_over15.forEach(zucchina => {
    sum_over15 += zucchina.peso
})

console.log(sum_over15)
