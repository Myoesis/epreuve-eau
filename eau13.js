// consigne : Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

// mes variables 
let arg=process.argv.slice(2)


//Mes fonctions
let my_select_sort = (array) => {
    for (let i = 0 ; i< array.length ; i++) {
        let min=Number.MAX_VALUE
        for (let j=i ; j < array.length ; j++) {
            if (array[j]<min) {
                min=array[j]
            }
        } 
        [array[i],array[array.indexOf(min)]] = [array[array.indexOf(min)],array[i]]

    }
    console.log(array)
}

// Vérifier les erreurs


// appeler mon résultat
my_select_sort(arg)
