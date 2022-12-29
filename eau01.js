// créer un programme qui va afficher toutes les différentes combinaisons de 2 nombres entre 00 et 99 

// mes variables 
let arg=process.argv[2]
const max=9
let combinaisons = ''

//Mes fonctions
let combine =()=>{
    for (let i = 0; i <= max; i++) {
       for (let j=0; j<= max; j++) {
        let nb1=`${i}${j}`                      // on crée le premier nombre
           for(let k=0; k<=max; k++){
            for(let l=0; l<=max; l++){
                let nb2=`${k}${l}`              // on crée le second
                if (nb1!=nb2 && nb1<nb2) {
                    combinaisons +=`${nb1} ${nb2}, ` // on ajoute les nombres dans notre réponse/combinaisons
                }
            }
           }
       }
    }
    console.log(combinaisons)
}

// Vérifier les erreurs
let testerror= () =>{
    if (arg) {
        console.log("pas besoin d'argument ici")
        process.exit()                            // permet d'arrêter le programme (un peu comme un break dans une boucle?)
    } 
}

// appeler mon résultat
testerror()
combine()