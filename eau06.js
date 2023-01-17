// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


// mes variables 
let arg=process.argv[2]
let finalQuote =""

//Mes fonctions
let upperAndLower =(string) => {
    for ( let i=0 ; i< string.length ; i++) {
        if (string[i]=== undefined) {
            finalQuote += ""
            i--
        } if (i%2 === 0 ) {
            finalQuote += string[i].toLowerCase() ;
        } else {
            finalQuote += string[i].toUpperCase() ;
        }
    }
    console.log(finalQuote)
}

// Vérifier les erreurs

let error =(arg) => {
    if (arg === undefined || !isNaN(parseInt(arg))) {
        console.log("error")
        process.exit()
    }
}
// appeler mon résultat
error(arg)
upperAndLower(arg)



