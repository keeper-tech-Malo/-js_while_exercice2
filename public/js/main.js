// 1.1
// let valeur = prompt("Entrez une valeur: ")
// valeur = valeur.trim();

// while (valeur == "") {
//     valeur = prompt(`Vous n'avez rien ecrit. Entrez une valeur ?`)
// };

// valeur = valeur.replace(/\s+/, '')
// while (valeur.length == 0) {
//     valeur = prompt(`Vous n'avez rien ecrit. Entrez une valeur ?`)
//     valeur = valeur.replace(/\s+/, '')

// };

// while(valeur.length <= 0){
//     valeur = prompt("Entrez votre val"); 
//     valeur = valeur.trim();

// }
// console.log(valeur);

//1.2
// let chiffre = parseInt(prompt(`Entrez un chiffre plus grand que 10 ?`));

// switch (isNaN(chiffre)) {
//     case true:

//         break;
//     case false:

//         break;
//     default:
//         break;
// }

// if (!isNaN(chiffre)) {
//     while (chiffre < 10) {
//         chiffre = parseInt(prompt(`${chiffre} est plus petit que 10. Entrez un autre chiffre?`));
//     }
// } else {
//     alert(`ce n'est pas une nombre réasayez !`)
// }

// while (chiffre < 10) {
//     chiffre = parseInt(prompt(`${chiffre} est plus petit que 10. Entrez un autre chiffre?`));
// }
// console.log(chiffre);

//2.1 
// let compt = 0;
// while (compt <= 11) {
//     if (compt % 2 == 1) {
//         console.log(compt);
//     };
//     compt++
// }

//2.2
// let prenom = prompt('Quel est ton prénom ?');
// let prenomTaille = prenom.length;
// let compt = 0;

// while (compt < prenomTaille) {
//     console.log(prenom);
//     compt++
// }


//2.3
// while (compt < prenomTaille) {
//     console.log(prenom.charAt(compt));
//     compt++
// }


//3.1
// let prenom = prompt('Quel est ton prénom ?');
// let prenomTaille = prenom.length;
// let compt = 0;

// while (compt < prenomTaille) {
//     if (compt % 2 == 1) {
//         console.log(`${prenom.charAt(compt).toUpperCase()} =>  à l'indice ${compt}`);
//     } else {
//         console.log(`${prenom.charAt(compt).toLowerCase()} =>  à l'indice ${compt}`);
//     }
//     compt++
// }

//3.2
// let calcul = prompt("Quel est ton calcul ?");   //3.5 * 2.5
// let condition = true; 

// while (condition == true) {
//     console.log(Math.ceil(eval(calcul)));

//     let stop = prompt('Veux-tu arreter ?')
//     if (stop == "oui") {
//         condition = false 
//         console.log('Merci.');
//     } else {
//         calcul = prompt("Quel est ton calcul ?");   //3.5 * 2.5
//     }
// }


//3.3
let prenom = prompt('ton prenom');

while (prenom.length <= 5 ) {
    prenom = prompt('prenom trop court,  recommencer')
}
if (prenom.length >=5) {
    console.log(prenom.toUpperCase());
}