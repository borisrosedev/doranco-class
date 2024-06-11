import * as rl from "node:readline"
import chalk  from "chalk";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let count = 0;


// users est un tableau et un tableau est un objet dont vous pouvez accéder aux méthodes et propriétés 
// exemple de méthode : forEach() , exemple de propriété : length
const users = [
    // ce tableau assignée comme constante possède deux objets mais pourrait en avoir plus
    // chaque objet répond à une structure identique composée de deux propriétés associées en clef-valeur une propriété email et une propriété password
    {
        email: 'agnes@gmail.com',
        password: bcrypt.hashSync('heliette', 10)
    },
    {
        email: 'jessy@gmail.com',
        password: bcrypt.hashSync('alexandre', 10)
    }
]

const Interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion(qu, credential){

    Interface.question(qu+'\n', (ans) => {
        if(ans){
            for(let i = 0; i < users.length; i++ ){
                if(ans == users[i][credential]){
                    // on est dans un bloc if 
                    // il s'agit des instructions qui seront exécutées si la réponse de l'utilisateur correspond à l'email d'un des utilisateurs
                    if(credential == 'email'){
                        console.log(chalk.green('🎉 You are identified'))
                    } else {
                        console.log(chalk.green('🎉 Valid password : access authorized'))
                        jwt.sign({ email : users[i].email}, '=============SECRET-KEY=============', {
                            
                        })
                        
                    }
            
                    Interface.close()
                    askQuestion('Quel est votre mot de passe', 'password')
                } else {
                    continue
                }
            }
        } else {
            console.log('Veuillez écrire votre email')
            Interface.close()
            askQuestion('Quel est votre identifiant ?', 'email')
        }
    })
    
}

askQuestion('Quel est votre identifiant ?', 'email')







// let age;
// age = 17;
// const isUnderAge = age < 18
// switch(isUnderAge){
//     case true:
//         console.log('Rentre chez toi');
//         break;
//     case false:
//         console.log('Viens faire la fête')
//         break;
//     default:
//         break;
// }

// if(age < 18){
//     // il s'agit d'un bloc if 
//     console.log('Tu es mineur');
//     // process.exit() met fin à l'exécution du code
//     process.exit(1)
// } 

