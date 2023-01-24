// consigne : Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. 
//Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.

// mes variables 
let argArray=[]



//Mes fonctions
let creatArray = () => {
    let i=2
    while (process.argv[i] !== undefined) {
        argArray.push(process.argv[i])
        i++
    }
    
}
let indexWanted = () => {
    for (let j=0 ; j< argArray.length-1 ; j++ ) {
        if (argArray[j] === argArray[argArray.length-1] ) {
            console.log(j)
            process.exit()
        }
    }
    console.log("-1")
} 

// Vérifier les erreurs
let error =()=> {
    if (process.argv[2]===undefined) {
        console.log("error")
        process.exit()
    }
}

// appeler mon résultat
error()
creatArray()
indexWanted()