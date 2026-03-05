let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
console.log(" PARTIE A :  ");
console.log("nom ??\"valeur par défaut\" ->", nom ?? "valeur par défaut");
console.log("age ?? \"valeur par défaut\" ->", age ?? "valeur par défaut");
console.log("ville ?? \"valeur par défaut\" ->", ville ?? "valeur par défaut");
console.log("score ?? \"valeur par défaut\" ->", score ?? "valeur par défaut");
console.log("actif ?? \"valeur par défaut\" ->", actif ?? "valeur par défaut");
console.log("\nPARTIE B : ");
console.log("nom || \"valeur par défaut\" ->", nom || "valeur par défaut");
console.log("age || \"valeur par défaut\" ->", age || "valeur par défaut");
console.log("ville || \"valeur par défaut\" ->", ville || "valeur par défaut");
console.log("score || \"valeur par défaut\" ->", score || "valeur par défaut");
console.log("actif || \"valeur par défaut\" ->", actif || "valeur par défaut");
console.log("PARTIE C :");
let variables = [{nom: "nom", valeur: nom},{nom: "age", valeur: age}, {nom: "ville", valeur: ville},{nom: "score", valeur: score},{nom: "actif", valeur: actif}];
for (let i = 0; i < variables.length; i++) {
    let v = variables[i];
    let resultatNullish = v.valeur ?? "valeur par défaut";
    let resultatOr = v.valeur || "valeur par défaut";
    console.log(v.nom.padEnd(6) + ": ?? et || ->", 
                resultatNullish === resultatOr ? "même résultat" : "résultat différent");
}