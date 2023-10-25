/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) { 
    if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}

console.log(crazySum(2, 2)); // Output: 12 (poiché 2 + 2 è lo stesso, la somma è moltiplicata per 3)
console.log(crazySum(3, 4)); // Output: 7 (poiché i numeri sono diversi, la somma è 3 + 4)

/* ESERCIZIO 2
Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(number) {     
    if ((number >= 20 && number <= 100) || number === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(50)); // Output: true (poiché 50 è compreso tra 20 e 100)
console.log(boundary(150)); // Output: false (poiché 150 non è compreso tra 20 e 100)
console.log(boundary(400)); // Output: true (poiché 400 è esattamente uguale a 400)
/* ESERCIZIO 3
Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(inputString) {
  // Suddivide la stringa in un array di caratteri, inverte l'array e lo riunisce in una stringa invertita.
  return inputString.split('').reverse().join('');
}

// Esempio di utilizzo:
const input = "EPICODE";
const reversed = reverseString(input);
console.log(reversed); // Output: "EDOCIPE"
/* ESERCIZIO 4
Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
function upperFirst(inputString1) {
    return inputString1.replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });
  }
  
  // Esempio di utilizzo:
  const input1 = "questa è una stringa di esempio";
  const modifiedString = upperFirst(input1);
  console.log(modifiedString); // Output: "Questa È Una Stringa Di Esempio"
  
/* ESERCIZIO 5
Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    const randomNumbers = [];
  
    for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * 11); // Genera un numero casuale tra 0 e 10 (incluso)
      randomNumbers.push(randomNumber);
    }
  
    return randomNumbers;
  }
  
  // Esempio di utilizzo:
  const n = 5; // Puoi specificare qualsiasi numero intero positivo per n
  const randomArray = giveMeRandom(n);
  console.log(randomArray); // Output: Un array di 5 numeri casuali tra 0 e 10
  
//EXTRA:
/* ESERCIZIO 1
Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    if (l1 >= 0 && l2 >= 0) {
      return l1 * l2;
    } else {
      return "Entrambi i lati devono essere maggiori o uguali a zero.";
    }
  }
  
  // Esempio di utilizzo:
  const lunghezza = 5;
  const larghezza = 3;
  const risultato = area(lunghezza, larghezza);
  console.log("L'area del rettangolo è:", risultato); // Output: "L'area del rettangolo è: 15"
  
/* ESERCIZIO 2
Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(number) {
    const absoluteDifference = Math.abs(number - 19);
  
    if (absoluteDifference > 19) {
      return absoluteDifference * 3;
    } else {
      return absoluteDifference;
    }
  }

  // Esempi di utilizzo:
  console.log(crazyDiff(25)); // Output: 6 (poiché |25 - 19| = 6, che non è maggiore di 19)
  console.log(crazyDiff(10)); // Output: 9 (poiché |10 - 19| = 9, che non è maggiore di 19)
  console.log(crazyDiff(40)); // Output: 63 (poiché |40 - 19| = 21, che è maggiore di 19 e moltiplicato per 3 dà 63)
  
/* ESERCIZIO 3
Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(inputString) {
    if (inputString.startsWith("code")) {
      return inputString; // Se la stringa inizia già con "code", restituisci la stringa originale.
    } else {
      return "code" + inputString; // Altrimenti, aggiungi "code" all'inizio della stringa.
    }
  }
  
  // Esempi di utilizzo:
  console.log(codify("hello"));      // Output: "codehello"
  console.log(codify("codeit"));     // Output: "codeit" (nessuna modifica)
  console.log(codify("coding is fun"));// Output: "codecoding is fun"
  
/* ESERCIZIO 4
Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
function check3and7(number) {
    if (number <= 0) {
      return false; // Se il numero non è positivo, non può essere un multiplo di 3 o 7.
    }
    return number % 3 === 0 || number % 7 === 0;
  }
  
  // Esempi di utilizzo:
  console.log(check3and7(9));  // Output: true (9 è un multiplo di 3)
  console.log(check3and7(14)); // Output: true (14 è un multiplo di 7)
  console.log(check3and7(12)); // Output: true (12 è un multiplo di 3)
  console.log(check3and7(5));  // Output: false (5 non è un multiplo di 3 o 7)
  
/* ESERCIZIO 5
Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(inputString2) {
    if (inputString2.length < 2) {
      return "La stringa è troppo breve per essere tagliata.";
    }
  
    return inputString2.slice(1, -1);
  }
  
  // Esempio di utilizzo:
  const input2 = "Hello";
  const result = cutString(input2);
  console.log(result); // Output: "ell"
  