// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre. 
// hypothèse : créer une fonction qui va "fabriquer" tout les mots possible dans une string (bonjour : b, bo, bon, bonj ...) ==> NON trop compliqué
//             crée une sonconde fonctino qui va comparer les strings (les trings sont-elles comparables? réponse : oui ! (===)) ===> idem

// chercher où apparait pour la première fois la première lettre du second argument. à partir de là, comparer lettre par lettre jusqu'à la fin du second argument

// mes variables 
let arg1=process.argv[2]
let arg2=process.argv[3]
let arg3=process.argv[4]


//Mes fonctions
let stringInString=(arg1,arg2)=> {
   if (!error(arg1) || !error(arg2) || arg3!== undefined) { // vérifier s'il y a des erreurs sur mes arguments.
    console.log ("error")
    process.exit()
   }
    for (let j=0 ; j<arg2.length ; j++) { 
        let index = arg1.indexOf(arg2[0])            // définir l'index, dans le premier argument, de la première lettre du second argument.
        if (arg2[j]!=arg1.slice(index)[j]) {         // vérifier a partir de l'index, lettre par lettre si ça concorde. sinon, exit.
            console.log("false")
            process.exit()
        }
    } console.log("true")                            // si jusquau bout ça colle, return true 
}






// Vérifier les erreurs
let error =(arg) => {
    if(arg !== undefined && typeof(arg)=== 'string' && isNaN(arg)) { // typeof à vérifier, pas sûr que ce soit la meilleur solution
        return true
    }
}


// appeler mon résultat

stringInString(arg1,arg2)
