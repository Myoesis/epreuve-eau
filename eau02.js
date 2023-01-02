// Créez un programme qui affiche ses arguments reçus à l’envers.
// hypothèse : prendre process.argv, retirer [0] et [1], couper l'argument à chaque espace, puis afficher le dernier émlément du tableau en premier (i--)

// mes variables 
let argument=process.argv[2]
let arg = process.argv.splice(2);  // splice(x,y) garde un nombre y d'éléments dans le tableau en partant de l'élément x

//Mes fonctions
let invert =(arg) => {
    for (let i = arg.length ; i>= 1 ; i-- ) {
        console.log(arg[i-1])
    }
}

// Vérifier les erreurs
let error=() => {
    if (!argument) {
        console.log("il faut des arguments !")
        process.exit()
    }
}

// appeler mon résultat

error(arg)
invert(arg)