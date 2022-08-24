import './style.css'
import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/ `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>

            <div class="card -back">
                ${CardGame("messi","figurinha do messi")}
            </div>
        </article>
    `
}

export default CardFrontBack;