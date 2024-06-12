import input from "./input.js";

export default function(data){

    return(
        `
            <form id="${data.id}" class="form">

                <section>
                    ${data.inputs.map((el, index) =>  input(el)).join('')}
                </section>
                <section>
                    ${data.buttons.map((el, index) =>  input(el)).join('')}
                </section>
            
            </form>
        
        `
    )


}