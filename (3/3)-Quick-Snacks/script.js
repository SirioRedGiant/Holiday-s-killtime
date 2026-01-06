// esercizio 1

let numberChosed = Number(prompt("Che numero scegli?"));
for (let i = 1; i <= numberChosed; i++) {
  //   console.log(Math.pow(i, 3));
  let previousNumbersCube = i * i * i;
  console.log("Il cubo di " + i + " è: " + previousNumbersCube);
}
