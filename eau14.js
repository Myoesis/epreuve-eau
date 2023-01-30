// consigne : Créez un programme qui trie les éléments donnés en argument par ordre ASCII.
// charCodeAt()
// mes variables 
let arg=process.argv.slice(2)
let ACSIITrié=""

//Mes fonctions
let get_ACSIII=(array) => {
    for (let indexArray = 0 ; indexArray < array.length ; indexArray++) {                   // boucle 1 pour recommencer la boucle 2 plusieurs fois en avancant d'un index à chaque fois 
        
        for (let indexMot=0; indexMot < array.length-1 ; indexMot++) {   
            let indexMin=indexArray                                            // on utilise indexMin comme un index, et on comparera les nombres en utilisant leurs index
            let indexLettre=0
            if (array[indexMot].charCodeAt(indexLettre)===array[indexMin].charCodeAt(indexLettre)) {
                let swapped=false
                while (swapped===false) {
                    swapped=true
                   if (array[indexMot].charCodeAt(indexLettre) > array[indexMin].charCodeAt(indexLettre)) {
                    indexMin = indexMot
                    swapped=false
                   } indexLettre++
                }
            } else if (array[indexMot].charCodeAt(indexLettre) > array[indexMin].charCodeAt(indexLettre)) {
                indexMin=indexMot
            } 
            
            
            
            [array[indexArray],array[indexMin]] = [array[indexMin],array[indexArray]]            // Remplacer le premier nombre (array[i]) par le plus petit nombre (array[min])
            }

        } 

        for (let i=0 ; i<array.length ; i++) {
            ACSIITrié+=array[i]+" "
        }
        console.log(ACSIITrié)
    }

// Vérifier les erreurs
let error =(argument)=> {
    if (argument[0] == undefined) {
        console.log("error")
        process.exit()
    }
}

// appeler mon résultat
error(arg)
get_ACSIII(arg)


