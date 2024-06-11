const form:HTMLElement = document.getElementById("login-form");


function submitHandler(e:any){
    e.preventDefault()

    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    
    console.log('error', new RegExp('/^[a-zA-Z0-9\.\?\!éèùï]{8,12}$/g').test(password.value))


    if(email.value.length < 10 || !(new RegExp('/^[a-zA-Z0-9\.\?\!éèùï]{8,12}$/', 'i').test(password.value))) {
        console.log('error', new RegExp('/^[a-zA-Z0-9\.\?\!éèùï]{8,12}$/g').test(password.value))
        const passwordError = document.getElementById('password-error') as HTMLElement
        const emailError = document.getElementById('email-error') as HTMLElement
        passwordError.innerHTML = `<small class="warning" style="opacity:0; color:red; font-weight:600; animation: show-up-warning 1000ms ease-in-out forwards"> Mot de passe incorrect ou manquant </small>`
        emailError.innerHTML = `<small class="warning" style="font-weight:600; color:red; animation:show-up-warning 1000ms ease-in-out forwards; opacity:0"> Email incorrect ou manquant </small>`
        setTimeout(() => { 
            passwordError.innerHTML = ``
            emailError.innerHTML = ``
        }, 5000)
        return 
    } else {
        
        const credentials = [email.value, password.value]

        credentials.forEach((credential, index) => {
            console.log('credential', credential, index)
        })
   
      
       

       
    }
}


form.addEventListener('submit', (e) => submitHandler(e))