// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const checkArray = function (array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log('maggiore di 5')
      sum += array[i]
    } else console.log('minore di 5')
  }
  return 'Somma:' + sum
}
console.log(checkArray(random))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    price: 29,
    name: 'Libro',
    id: 'id214532',
    quantity: 5,
  },
  {
    price: 5,
    name: 'Astuccio',
    id: 'id214322',
    quantity: 2,
  },
  {
    price: 2,
    name: 'matita',
    id: 'id354532',
    quantity: 9,
  },
]

const shoppingCartTotal = function (obj) {
  let total = []
  let sumTotal = 0
  for (let i = 0; i < obj.length; i++) {
    total.push(obj[i].name + ' ' + obj[i].quantity)
    sumTotal += obj[i].price
  }
  return total + ' Totale=' + sumTotal + '$'
}
console.log(shoppingCartTotal(shoppingCart))

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function (obj) {
  if (obj.price && obj.name && obj.id && obj.quantity) {
    shoppingCart.push(obj)
  }
  return shoppingCart
}
const newObj = {
  price: 10,
  name: 'righello',
  id: 'id214547',
  quantity: 3,
}
console.log(addToShoppingCart(newObj))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function (obj) {
  let max = 0
  for (let i = 0; i < obj.length; i++) {
    if (max < obj[i].price) {
      max = obj[i].price
    }
  }
  return max
}
console.log(maxShoppingCart(shoppingCart))

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function (obj) {
  return obj[obj.length - 1]
}
console.log(latestShoppingCart(shoppingCart))

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function (n) {
  let casualNumber = 0
  let boolean = true
  let tentativi = 0
  while (boolean) {
    tentativi += 1
    let number = Math.floor(Math.random() * 11)
    if (number >= n) {
      casualNumber++
    } else if (casualNumber > 3) {
      boolean = false
    }
  }
  return console.log(
    n + ' è stato maggiore di x per tre volte di fila, tentativi:' + tentativi
  )
}
loopUntil(5)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const average = function (array) {
  let sum = 0
  let number = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sum += array[i]
      number += 1
    }
  }
  return sum / number
}
const array = [10, 10, 'vae', 4]
console.log(average(array))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function (array) {
  let max = 0
  let pos = 0
  for (let i = 0; i < array.length; i++) {
    if (max < array[i].length) {
      max = array[i].length
      pos = i
    }
  }
  return array[pos]
}
const newArray = ['Caio', 'epicoder', 'supercalifragilistiche', 'studente']
console.log(longest(newArray))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = function (string) {
  const list = string.split(' ')
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 'SPAM' || list[i] === 'SCAM') {
      return false
    }
  }
  return true
}
const emailContent = 'SPAMprovaSCAM'
console.log(antiSpam(emailContent))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giorniPassati = function (data) {
  let oggi = new Date()
  let dataInserita = new Date(data)
  let differenza = oggi - dataInserita
  let giorniPassati = Math.floor(differenza / (1000 * 60 * 60 * 24))
  return giorniPassati
}

// Utilizzo della funzione
let dataInserita = new Date('2024-03-01')
console.log('Giorni passati:', giorniPassati(dataInserita))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const matrixGenerator = function (x, y) {
  const matrix = []
  for (let i = 0; i < x - 1; i++) {
    for (let n = 0; n <= y; n++) {
      const number = []
      number.push(i, n)
      matrix.push(number)
    }
  }
  return matrix
}
console.log(matrixGenerator(3, 2))
