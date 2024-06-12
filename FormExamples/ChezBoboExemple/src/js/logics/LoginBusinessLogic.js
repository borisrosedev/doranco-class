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
                    id: 'login-submit-button',
                    type: 'submit',
                    textContent: 'Valider'
                },
                {
                    id: 'login-reset-button',
                    type: 'reset',
                    textContent: 'Réinitialiser'
                },
            ]

        } 
        
        const loginMain = document.getElementById('login-main') 
        loginMain.innerHTML += form(this.data);
        const loginForm = document.getElementById('login-form')
        const self = this
        loginForm.onsubmit = (e) => self.onSubmit(e);
        loginForm.addEventListener('reset', function(){
            self.onReset()
        })
 
    }
    
    onSubmit(e){
        e.preventDefault()
        console.log('Clic sur le formulaire')
    }

    onReset(){
        console.log('Reset le formulaire')
    }


}