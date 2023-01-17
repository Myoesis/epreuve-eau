// Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. 
//Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne

// mes variables 
let arg=process.argv[2]
let finalQuote =""


//Mes fonctions
let majuscule =(arg)=> {
    for(let i=0 ; i<arg.length ; i++) {
        if(arg[i-1] === undefined || arg[i-1]===" " || arg.charCodeAt(i-1)===10 ) {  //charCodeAt(i) vérifie le code ASCII à une position. Le retour a la ligne est au 10
            finalQuote += arg[i].toUpperCase()
        } else {
            finalQuote += arg[i].toLowerCase()
        }
    }
    console.log(finalQuote)
}

// Vérifier les erreurs
let error=(arg)=> {
    if (!isNaN(parseInt(arg)) || arg === undefined) {
        console.log("error")
        process.exit()
    }
}

// appeler mon résultat
error(arg)
majuscule(arg)
