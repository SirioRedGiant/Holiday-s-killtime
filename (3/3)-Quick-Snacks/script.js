// esercizio 1

let numberChosed = Number(prompt("Che numero scegli?"));
for (let i = 1; i <= numberChosed; i++) {
  //   console.log(Math.pow(i, 3));
  let previousNumbersCube = i * i * i;
  console.log("Il cubo di " + i + " è: " + previousNumbersCube);
}

// esercizio 2

for (let i = 0; i <= 10; i++) {
  let checkerRisultato = 2 ** i;
  if (checkerRisultato <= 1000) {
    console.log("2 elevato alla " + i + " viene:" + checkerRisultato)
  }
}
