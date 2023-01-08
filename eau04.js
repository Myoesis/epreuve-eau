// créer un programme qui va afficher le prochain nombre premier après l'argument
// afficher -1 si le paramètre est négatif ou mauvais

// boucle à partir de l'argument + vérification de si c'est un nombre premier ? 

// mes variables 
let arg=parseInt(process.argv[2])    // parseInt sinon le programme prend arg pour une string, et ça ne renvois plus rien 
let excedent=process.argv[3]

//Mes fonctions
let prochainPremier =(n)=>{
      while (isPrime(n)) {
    n++
   } console.log(n)
}

let isPrime = (n) => {
    for (let i=2 ; i<=n**0.5 ; i++) {
        if (n%i===0) {
            return true
        }
    }
    return false
}

// Vérifier les erreurs
let checkError = () => {
    if (arg<0 || isNaN(arg) || !isNaN(excedent)) {
        console.log("-1")
        process.exit()
    }
}

// appeler mon résultat

checkError()
prochainPremier(arg)