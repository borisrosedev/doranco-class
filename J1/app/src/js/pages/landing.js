// console.log('Dev : Je suis dans landing.js')
//   // let image; // déclaration de la variable image
//             // // ci-dessous initialisation de la variable image
//             // Pour accéder à l'une des propriétés d'un objet vous devez par exemple utiliser la notation par point (dot notation)
//             // ex .propriety 
//             // lorsque vous voyez un nom suivi directement de parenthèses c'est une 
        

//             // const image = document.getElementsByTagName('img')[0];

//             // const image = document.querySelector('img')

//             // // setTimeout est une fonction asynchrone
//             // // elle admet une exécution différée de sa callback autrement dit de la fonction qui est définie comme argument 
//             // setTimeout(function(){

//             //     image.src = "./assets/images/strawberry.jpg"
//             //     // image est ici un tableau 
//             //     image.style.width = "500px"
                

//             // }, 5000)


//             // const body = document.querySelector('body'); // il existe sur la page 
//             // const button = document.createElement('button'); // il n'exist pas sur la page 
//             // body.appendChild(button)
//             // button.textContent = "Valider"


          

          


// function createImage(url, isFromInternet){
 
//     const container = document.querySelector('#container');
 
//     const image = document.createElement("img");
//     image.src = isFromInternet ? url : "./assets/images/" + url

//     // faites  la même chose pour la situation suivante :   
//     //si la variable age est inférieure à 18 ans alors faites en sorte que la variable isAllowed soit égale à false sinon true


//     container.appendChild(image)
// }

// // let age; 

// // age = 19;

// // let isAllowed = false;
// // let condition = age > 18 
// // let firstname = "" // truthy


// // isAllowed = firstname ? true : false;

// // if(age > 18){
// //     isAllowed = true;
// // } else {
// //     isAllowed = false;
// // }



// createImage("muffins.jpg", false)
// createImage("strawberry.jpg", false)
// createImage("portrait.png", false)

// function add(param1, param2){

//     return param1 + " " + param2;

// }



const add = (param1, param2) => param1 + "" + param2;

window.prompt('Salut les amis')
alert('Au secours !!')
window.confirm('Voulez vous partir ')

console.log(add)


