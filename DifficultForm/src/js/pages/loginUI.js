import form from "../components/form.js"

export default function(data){

    return(
        `
            <header>
                <span>ChezBobo</span>
                <nav>
                    <a href=">Accueil</a>
                    <a href="">Contact</a>
                </nav>
            </header>
            <main>
                ${form(data)}
            </main>
            <footer></footer>

        `
    )
}