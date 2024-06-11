const form:HTMLElement = document.getElementById("login-form");


function submitHandler(e:any){
    e.preventDefault()
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    if(!email.value || !password.value) {
        return 
    } else {
        
        const credentials = [email.value, password.value]

        credentials.forEach((credential, index) => {
            console.log('credential', credential, index)
        })
   
      
       

       
    }
}


form.addEventListener('submit', (e) => submitHandler(e))