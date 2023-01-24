// consigne : Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

// mes variables 
let arg=process.argv.slice(2)


//Mes fonctions
let my_select_sort = (array) => {
    for (let i = 0 ; i< array.length ; i++) {                   // boucle 1 pour recommencer la boucle 2 plusieurs fois en avancant d'un index à chaque fois 
        let min=i                                               // on utilise min comme un index, et on comparera les nombres en utilisant leurs index
        for (let j=i ; j < array.length ; j++) {                // Boucle 2 : comparer les nombres, et garder en min l'index du plus petit
            if (Number(array[j])<Number(array[min])) {
                min=j
            }
        } 
        [array[i],array[min]] = [array[min],array[i]]            // Remplacer le premier nombre (array[i]) par le plus petit nombre (array[min])

    }
    console.log(array)
}

// Vérifier les erreurs


// appeler mon résultat
my_select_sort(arg)
