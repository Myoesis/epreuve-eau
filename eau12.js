// consigne : créer un fonction tri à bulle --> comparer un index avec le suivant. si i > i+1, on change les indexes

// mes variables 
let arg=process.argv.slice(2)

//Mes fonctions

let my_bubble_sort = (array) => {
    let swapped = false
    while (swapped === false) {
        swapped=true
    for (let i = 0 ; i<array.length ; i++) {
        if (array[i]>array[i+1]) {
            [array[i],array[i+1]]=[array[i+1],array[i]]
            swapped=false
        } 
    } 
    }
 console.log(array)
}


// Vérifier les erreurs
let error = () => {
    for (let i=0 ; i<arg.length ; i++) {
        if (isNaN(parseInt(arg[i]))) {
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

error(arg)
my_bubble_sort(arg)