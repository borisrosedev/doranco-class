export default function(data){

    return(
        `
            <article>
                <label for="${data.id}"></label>
                <input type="${data.type}" placeholder="${data.placeholder}" id="${data.id}" /> 
            </article>
        
        `
    )

}