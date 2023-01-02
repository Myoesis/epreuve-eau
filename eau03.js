// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.
//Afficher -1 si le paramètre est négatif ou mauvais.
// Une fonction pour créer la suite de fibonnaci dans un tableau (n=n-1 + n-2) (arreter la fonction quand on arrive à l'index demandé, et afficher le dernier element du tableau)

// mes variables 
let arg = process.argv[2]
let excedent = process.argv[3]                      // une variable pour check si plus d'un element
let fibo = [0,1,1,2]

//Mes fonctions
let creatfibo = (arg) => {

    if(arg<fibo.length) {
        console.log(fibo[arg])
    } else {
        for (let i = 4 ; i<=arg ; i++) {
            let n=fibo[i-1]+fibo[i-2]
            fibo.push(n)
            }
        console.log(fibo[arg])
    }
}

// Vérifier les erreurs
let error=(arg) => {
    if (!arg) {
        console.log("Il faut entrer un nombre")
        process.exit()
    } else if (isNaN(arg)) {
        console.log("Il faut entrer UN NOMBRE !")
        process.exit()
    } else if (!isNaN(excedent)) {
        console.log("Un seul nombre suffira :) ")
        process.exit()
    }
}

// appeler mon résultat
error(arg)
creatfibo(arg)