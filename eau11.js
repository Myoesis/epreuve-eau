// consigne : Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres.
// Nombres négatifs acceptés.

// mes variables 

let argArray =process.argv.slice(2)  // permet de créer un tableau à partir des arguments, quelque soit leur nombres !
let diff=Number.MAX_VALUE     //Number.MAX_VALUE permet de définir n comme une valeur maximal !

//Mes fonctions

 
let compare = () => {
                                     
    for (let i=0 ; i<argArray.length-1 ; i++) {
       for (let j = 1 ; j< argArray.length ; j++) {
        if(argArray[i]<argArray[j] ) {
            if (argArray[j]-argArray[i] < diff) {
                diff=argArray[j]-argArray[i]
            }
        } else if (argArray[i]>argArray[j]) {
            if (argArray[i]-argArray[j] < diff) {
                diff=argArray[i]-argArray[j]
        }
       }
    }
} console.log(diff)
}
// Vérifier les erreurs

let error = () => {
    for (let i=0 ; i<argArray.length ; i++) {
        if (isNaN(parseInt(argArray[i]))) {
            console.log("error")
            process.exit()
        }
    } 
    if (process.argv[2]== undefined) {
        console.log("error")
        process.exit()
    }
    }

// appeler mon résultat
error()
compare()



