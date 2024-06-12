export default function(){
    const token  = JSON.parse(window.localStorage.getItem('chez-bobo-token'))

    const loggedInNav = () => {
        return(
            `
                    <a href=''>
                        <i class='fa-solid fa-right-from-bracket'></i>
                    </a> 
                
            
            `
        )
    }

    const loggedOutNav = () => {
        return(
            `
                    <a hre=''>
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </a>
            
            `
        )
    }

    return(
        `
            <header class="app-header">
                <span aria-lable="ChezBobo">ChezBobo</span>
                <nav id="header-nav">
                    ${token && token.length ? loggedOutNav() : 
                    loggedInNav() }
                </nav>
            </header>    
        `
    )
}