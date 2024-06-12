import button from "./button.js";
import input from "./input.js";

export default function(data){

    return(

        `
            <form id="${data.id}">

                <section>
                    ${input(data.email)}
                    ${input(data.password)}
                </section>-
                <section>
                    ${button(data.submitButton)}
                    ${button(data.resetButton)}
                </section>
            
            
            </form>
        
        
        
        `


    )


}