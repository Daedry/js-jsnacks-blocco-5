/* 
Scrivi una funzione che accetti una stringa come argomento 
e la ritorni girata (es. Ciao -> oaiC)

*/

function reverseString(string) {
    return string.split('').reverse().join('')
}

console.log(reverseString('hello'));
console.log(reverseString('ciliegia'));
console.log(reverseString('roma'));

