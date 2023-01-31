// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres. 

// mes variables 
let arg=process.argv[2]
let arg2=process.argv[3]


//Mes fonctions
let onlyNumbers =(arg)=> {
    for (let i=0 ; i< arg.length ; i++) {
        if (isNaN(parseInt(arg[i]))) {
            console.log("fasle")
            process.exit()
        }
    } console.log("true")
}

// Vérifier les erreurs
let error = (arg)=> {
    if (arg===undefined || arg2) {
        console.log("error")
        process.exit()
    }
}

// appeler mon résultat
error(arg)
onlyNumbers(arg)