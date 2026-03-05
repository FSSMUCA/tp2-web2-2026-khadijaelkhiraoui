
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for (let i = 0; i < 10; i++) {
    let valeur = valeurs[i];
    let valeurStr = String(valeur);
    if (valeurStr === "") {
        valeurStr = "(chaine vide)"; 
    }
    let type = valeur ? "truthy" : "falsy";
    console.log(valeurStr + " -> " + type);
}