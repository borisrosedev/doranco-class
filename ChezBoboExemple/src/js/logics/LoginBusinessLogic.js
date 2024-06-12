import form from "../components/form.js"

export class LoginBusinessLogic {
    data;

    constructor(){ 
        this.data = {
            
            id: 'login-form',
            inputs: [
                {
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Entrer votre email'
                },
                {
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Entrer votre mot de passe'
                }
            ],
            buttons : [
                {
                    id: 'submit-button',
                    name: 'subit-button',
                    type: 'submit',
                    textContent: 'Valider'
                },
                {
                    name: 'reset-button',
                    type: 'reset',
                    textContent: 'Réinitialiser'
                },
            ]

        } 
        
        const loginMain = document.getElementById('login-main') 
        loginMain.innerHTML += form(this.data);
    }
    



    onSubmit(){
        console.log('Clic sur le formulaire')
    }

    onReset(){
        console.log('Reset le formulaire')
    }


}