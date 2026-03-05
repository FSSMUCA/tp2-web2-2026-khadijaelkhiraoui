
let paires = [[0, ""],[0, "0"],[0, false], ["", false],[null, undefined],[null, false], [NaN, NaN],[1, "1"],[" \t\n ", 0]];
let compteurDifferent = 0;
for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0];
    let b = paires[i][1];  
    let strA = JSON.stringify(a);
    let strB = JSON.stringify(b);
    let resultatEgalSimple = (a == b);
    let resultatEgalStrict = (a === b);
    let ligneGauche = (strA + " == " + strB).padEnd(20);
    let ligneDroite = (strA + " === " + strB).padEnd(20);
    console.log(ligneGauche + " -> " + resultatEgalSimple + 
                "    |   " + ligneDroite + " -> " + resultatEgalStrict);
    if (resultatEgalSimple === true && resultatEgalStrict === false) {
        compteurDifferent++;
    }
}
console.log("---");
console.log(compteurDifferent + " paire(s) où == et === donnent des résultats différents");