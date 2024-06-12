export function standardButton(data){
    // fonction qui return un bouton 
    /*
        ex de data
        let data = {

            type : 'submit',
            textContent: 'Valider',
            id: 'login-submit-button'
            
        } 
    */

    return (
        `
            <button id="${data.id}" type="${data.type}"> ${data.textContent} </button>
        
        
        `
    )
}

export function CustomButton(data){
    return (
        `
            <button class="super-button" id="${data.id}" type="${data.type}"> ${data.textContent} </button>
        
       
        `

    )
}