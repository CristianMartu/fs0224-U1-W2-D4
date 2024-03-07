/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 * l2
}
let altezza = 3
let base = 5
console.log('Area rettangolo:', area(altezza, base))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (int1, int2) {
  if (int1 !== int2) {
    return console.log('Parametri diversi somma=', int1 + int2)
  } else {
    return console.log('Parametri uguali Somma=', (int1 + int2) * 3)
  }
}
crazySum(10, 11)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num1, num2 = 19) {
  const sub = Math.abs(num1 - num2)
  if (num1 > num2) {
    return sub * 3
  } else {
    return sub
  }
}
console.log(crazyDiff(18))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}
console.log(boundary(Math.ceil(399.5)))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (string) {
  const pos = string.indexOf('EPICODE')
  if (pos !== 0) {
    return 'EPICODE ' + string
  } else {
    return string
  }
}
console.log(epify('student'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return true
  } else return false
}
let n = 7
if (n >= 0) {
  console.log(check3and7(n))
} else console.log('Numero negativo')
//console.log(check3and7(Math.abs(n)))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string) {
  const lista = string.split('')
  let reverse = ''
  for (let i = 1; i <= lista.length; i++) {
    reverse += lista[lista.length - i]
  }
  return reverse
}
console.log(reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (string) {
  const lista = string.split(' ')
  let upper = ''
  for (let i = 0; i < lista.length; i++) {
    const word = lista[i].split('')
    for (let n = 0; n < word.length; n++) {
      if (n !== 0) {
        upper += word[n]
      } else {
        upper += word[n].toUpperCase()
      }
    }
    upper += ' '
  }
  return upper
}
console.log(upperFirst('che bella la vita di un programmatore'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string) {
  const lista = string.split('')
  let cut = ''
  for (let i = 0; i < lista.length; i++) {
    if (i !== 0 && i !== lista.length - 1) {
      cut += lista[i]
    }
  }
  return cut
}
console.log(cutString('nEPICODEn'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  const array = []
  for (let i = 0; i < n; i++) {
    array.push(Math.ceil(Math.random() * 10))
  }
  return array
}
console.log(giveMeRandom(10))
