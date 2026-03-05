let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");
let nomCorrige = nom.trim();
if (nomCorrige === "") {
    nomCorrige = "Inconnu";
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
let ageCorrige = parseInt(age, 10);
if (Number.isNaN(ageCorrige) || ageCorrige <= 0) {
    console.log("age              : valeur invalide");
} else {
    console.log("age              : " + ageCorrige + " (valide)");
}
let indexArobase = email.indexOf("@");
let estEmailValide = false;
if (indexArobase !== -1) {
    let indexPoint = email.indexOf(".", indexArobase);
    if (indexPoint !== -1) {
        estEmailValide = true;
    }
}
console.log('email            : "' + email + '" (' + 
           (estEmailValide ? "valide" : "invalide : pas de point après @") + ')');
let scoreCorrige = parseInt(scoreJeu, 10);
if (Number.isNaN(scoreCorrige)) {
    scoreCorrige = 0;
}
console.log('scoreJeu         : ' + scoreCorrige + ' (extrait depuis "' + scoreJeu + '")');
let estAdminCorrige = (estAdmin === "true");
console.log('estAdmin         : ' + estAdminCorrige + 
           ' (attention : Boolean("false") = true, conversion manuelle requise)')
let derniereConnexionCorrigee = derniereConnexion ?? "Jamais connecté";
console.log('derniereConnexion: "' + derniereConnexionCorrigee + '" (valeur par défaut via ??)');
let nombreConnexionsCorrige = Number(nombreConnexions);
if (nombreConnexionsCorrige === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)');
} else {
    console.log('nombreConnexions : ' + nombreConnexionsCorrige);
}

console.log("================================");