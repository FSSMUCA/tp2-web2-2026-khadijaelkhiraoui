let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
let sousTotal = prix * quantite;
console.log("Sous-total: " + sousTotal + " MAD");
let montantReduction = 0;
if (codePromo !== null && estMembre === true) {
    montantReduction = sousTotal * (reductionPourcentage / 100);
    console.log("Réduction appliquée: " + montantReduction + " MAD");
} else {
    console.log("Réduction: 0 MAD");
}
let totalFinal = sousTotal - montantReduction;
console.log("Total final: " + totalFinal + " MAD");
let paiementAccepte = soldeCompte >= totalFinal;
if (paiementAccepte) {
    console.log("Paiement accepté");
} else {
    console.log("Solde insuffisant");
}
let nouveauSolde;
if (paiementAccepte) {
    nouveauSolde = soldeCompte - totalFinal;
    console.log("Nouveau solde: " + nouveauSolde + " MAD");
}
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + montantReduction + " MAD");
console.log("Total     : " + totalFinal + " MAD");

if (paiementAccepte) {
    console.log("Statut    : Paiement accepté");
    console.log("Solde     : " + nouveauSolde + " MAD");
} else {
    console.log("Statut    : Solde insuffisant");
}
console.log("=========================");