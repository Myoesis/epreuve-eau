//Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.

//fonction pour calculer les combinaisons possible.
// 1 - créer une variable qui va contenir les différents qui sont ok
// 2 - créer une fonction qui check les nombres un par un ( boucle de 000 à 999 ? NON --> boucles imbriquées )
//   2.1 - dans chaque trio, les chiffres sont différents. (pas de 121 par ex)
const limit=9
let combinaison =('')
const arg=process.argv[2]


// gestion des erreurs (si un argument est présent)
if (arg) {
    console.log("pas besoin d'argument")
    process.exit()
} 


// créer ma/mes fonctions
let combin = () => {
    for (let i = 0; i <= limit; i++) {                       // boucle pour les centaines
        for (let j = i+1; j <= limit; j++) {                 // boucle pour les dizaines
            for (let k = j+1; k<= limit; k++) {              // boucle pour les unités
                if (i!=j!=k && i<j<k ) {                     // vérifier que chaque élément est différent des autres et croissant
                    combinaison += `${i}${j}${k},`           // ajouter à la variable combinaison si ça correspond aux critères
                }
            }
            
        }
    }
    console.log(combinaison)
 }


// appeler le résultat de l'exercice
combin()