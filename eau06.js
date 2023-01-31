// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


// mes variables 
let arg=process.argv[2]
let excedent = process.argv[3]
let finalQuote =""

//Mes fonctions
let upperAndLower =(string) => {
    let j=0                                                // j va nous permettre de transformer les lettres indifféremment des espaces
    for ( let i=0 ; i< string.length ; i++) {                
        if (string[i]=== " ") {                            // si un caractère est un espace => pas d'incrméentation de j
            finalQuote += " "
        } else if (j%2 === 0 ) {
            finalQuote += string[i].toLowerCase() 
            j++
        } else {
            finalQuote += string[i].toUpperCase() 
            j++
        }
    }
    console.log(finalQuote)
}

// Vérifier les erreurs

let error =(arg) => {
    if (arg === undefined || !isNaN(parseInt(arg))|| excedent) {
        console.log("error")
        process.exit()
    }
}
// appeler mon résultat
error(arg)
upperAndLower(arg)




