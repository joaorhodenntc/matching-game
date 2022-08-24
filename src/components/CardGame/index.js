import './style.css'

function CardGame(icon='pacote',alt='Logo Pacote'){
    return `
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `
}

export default CardGame;