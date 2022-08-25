import './style.css'
import CardFrontBack  from '../../components/CardFrontBack';
import cards from './data.js'

function BoardGame(amountCards) {
    const htmlCardList = cards.map((card)=> CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardList.join('');

    return `
    <section class="board-game">
        ${$htmlCards}
    </section>
    `;
}

export default BoardGame;