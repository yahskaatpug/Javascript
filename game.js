document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const restartButton = document.getElementById('restartButton');

    const cardsArray = [
        'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 
        'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
    ];
    let cards = [];
    let flippedCards = [];
    let matchedCards = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createCard(cardValue) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = cardValue;
        card.innerHTML = `<span>${cardValue}</span>`;
        card.querySelector('span').style.visibility = 'hidden';
        card.addEventListener('click', flipCard);
        return card;
    }

    function initializeGame() {
        gameBoard.innerHTML = '';
        shuffle(cardsArray);
        cards = cardsArray.map(value => createCard(value));
        cards.forEach(card => gameBoard.appendChild(card));
        flippedCards = [];
        matchedCards = 0;
    }

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
            this.classList.add('flipped');
            this.querySelector('span').style.visibility = 'visible';
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.value === card2.dataset.value) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedCards += 2;
            flippedCards = [];
            if (matchedCards === cards.length) {
                setTimeout(() => alert('You have matched all the cards!'), 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.querySelector('span').style.visibility = 'hidden';
                card2.querySelector('span').style.visibility = 'hidden';
                flippedCards = [];
            }, 1000);
        }
    }

    restartButton.addEventListener('click', initializeGame);

    initializeGame();
});
