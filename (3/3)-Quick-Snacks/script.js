// esercizio 1
console.log("Primo Esercizio:");
let numberChosed = Number(prompt("Che numero scegli?"));
for (let i = 1; i <= numberChosed; i++) {
  //   console.log(Math.pow(i, 3));
  let previousNumbersCube = i * i * i;
  console.log("Il cubo di " + i + " è: " + previousNumbersCube);
}

// esercizio 2
console.log("Secondo Esercizio:");
for (let i = 0; i <= 10; i++) {
  let checkerRisultato = 2 ** i;
  if (checkerRisultato <= 1000) {
    console.log("2 elevato alla " + i + " viene: " + checkerRisultato);
  }
}
//* si poteva fare per uscire i < 10
//todo: Se avessi voluto evitare di sapere che 2 ** 10 è        superiore a 1000
console.log("Alternativa:");
for (let p = 1; p <= 1000; p = p * 2) {
  console.log(p);
}

// esercizio 3
console.log("Terzo Esercizio:");

let fourCifreNumero = prompt("Inserisci qui un numero da 4 cifre");

let cifreSommate = 0;
for (let i = 0; i < fourCifreNumero.length; i++) {
  cifreSommate = cifreSommate + Number(fourCifreNumero[i]);
  /* perchè Number me lo disegna come oggetto? */
}
console.log("La somma dei numeri che compongono il numero digitato da te" + "'" + fourCifreNumero + "'" + " è:" + cifreSommate)

// Esercizio 4
console.log("Quarto Esercizio:")

let firstTenNumbsum = 0;
for (let i = 1; i <= 10; i ++) {
    firstTenNumbsum += i
}
let mediaNumbers = firstTenNumbsum / 10
console.log("La somma dei primi 10 numeri è: " + firstTenNumbsum)
console.log("La media dei numeri è: " + mediaNumbers)
