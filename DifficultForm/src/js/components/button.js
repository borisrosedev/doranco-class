export default function(data){
    return(
        `
            <button type="${data.type}">${data.textContent}</button>
        
        `
    )
}