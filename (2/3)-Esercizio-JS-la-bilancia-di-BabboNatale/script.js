let pesiBase = [2, 5, 1, 1, 7, 3, 12, 6, 9, 3];

// Chiediamo l'operazione all'utente con il prompt
let scelta = prompt("Cosa vuoi calcolare? (peso medio / peso massimo / peso minimo / numero di giocattoli)");

if (scelta === "peso medio") {
    let somma = 0;
    for (let i = 0; i < pesiBase.length; i++) {
        somma = somma + pesiBase[i];
    }
    let media = somma / pesiBase.length;
    console.log("Il peso medio è: " + media);
}
else if (scelta === "peso minimo") {
    let minimo = pesiBase[0];
    for (let i = 1; i < pesiBase.length; i++) {
        if (pesiBase[i] < minimo) {
            minimo = pesiBase[i];
        }
    }
    console.log("Il peso minimo è: " + minimo);
}
else if (scelta === "peso massimo") {
    let massimo = pesiBase[0];
    for (let i = 1; i < pesiBase.length; i++) {
        if (pesiBase[i] > massimo) {
            massimo = pesiBase[i];
        }
    }
    console.log("Il peso massimo è: " + massimo);
}
else if (scelta === "numero di giocattoli") {
    console.log("Il numero di giocattoli pesati è: " + pesiBase.lenght);

}
else {
    console.log("Operazione non riuscita. Verifica di avere posato correttamente il giocattolo:")
    console.log("PROMPT ERRATO: reinserisci")
}