// consigne : Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


// mes variables 
let arg=process.argv[2]
let arg2=process.argv[3]
let arg3=process.argv[4]
let answer =("")


//Mes fonctions

betweenMinMax=(num1,num2)=> {
   if (num1>num2) {
    for (let i = num2 ; i < num1 ; i++) {
        answer += `${i} `
    } 
} else if (num1<num2) { for (let i = num1 ; i < num2 ; i++) {
        answer += `${i} `
    }
}
console.log(answer)
}

// Vérifier les erreurs
let error = (num1,num2,num3) => {
    if(isNaN(num1) || isNaN(num2) || num3!= undefined || num1===num2) {
        console.log("error")
        process.exit()
    }
}

// appeler mon résultat

error(arg,arg2,arg3)
betweenMinMax(arg,arg2)