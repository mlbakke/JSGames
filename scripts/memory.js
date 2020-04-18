document.addEventListener('DOMContentLoaded', () => {
	//cards
	const cards = [
		{
			name : 'Angry Klopp',
			img  : 'img/memory/angryKlopp.jpg'
		},
		{
			name : 'Angry Klopp',
			img  : 'img/memory/angryKlopp.jpg'
		},
		{
			name : 'Celebrating Klopp',
			img  : 'img/memory/celebratingKlopp.jpg'
		},
		{
			name : 'Celebrating Klopp',
			img  : 'img/memory/celebratingKlopp.jpg'
		},
		{
			name : 'Clapping Klopp',
			img  : 'img/memory/clappingKlopp.jpg'
		},
		{
			name : 'Clapping Klopp',
			img  : 'img/memory/clappingKlopp.jpg'
		},
		{
			name : 'Crazy Klopp',
			img  : 'img/memory/crazyKlopp.jpg'
		},
		{
			name : 'Crazy Klopp',
			img  : 'img/memory/crazyKlopp.jpg'
		},
		{
			name : 'Cutie Klopp',
			img  : 'img/memory/cutieKlopp.jpg'
		},
		{
			name : 'Cutie Klopp',
			img  : 'img/memory/cutieKlopp.jpg'
		},
		{
			name : 'Funny Klopp',
			img  : 'img/memory/funnyKlopp.jpg'
		},
		{
			name : 'Funny Klopp',
			img  : 'img/memory/funnyKlopp.jpg'
		},
		{
			name : 'Happy Klopp',
			img  : 'img/memory/happyKlopp.jpg'
		},
		{
			name : 'Happy Klopp',
			img  : 'img/memory/happyKlopp.jpg'
		},
		{
			name : 'Laughing Klopp',
			img  : 'img/memory/laughingKlopp.jpg'
		},
		{
			name : 'Laughing Klopp',
			img  : 'img/memory/laughingKlopp.jpg'
		},
		{
			name : 'Nervous Klopp',
			img  : 'img/memory/nervousKlopp.jpg'
		},
		{
			name : 'Nervous Klopp',
			img  : 'img/memory/nervousKlopp.jpg'
		},
		{
			name : 'Playing Klopp',
			img  : 'img/memory/playingKlopp.jpg'
		},
		{
			name : 'Playing Klopp',
			img  : 'img/memory/playingKlopp.jpg'
		},
		{
			name : 'Pointing Klopp',
			img  : 'img/memory/pointingKlopp.jpg'
		},
		{
			name : 'Pointing Klopp',
			img  : 'img/memory/pointingKlopp.jpg'
		},
		{
			name : 'Rejected Klopp',
			img  : 'img/memory/rejectedKlopp.jpg'
		},
		{
			name : 'Rejected Klopp',
			img  : 'img/memory/rejectedKlopp.jpg'
		},
		{
			name : 'Relieved Klopp',
			img  : 'img/memory/relievedKlopp.jpg'
		},
		{
			name : 'Relieved Klopp',
			img  : 'img/memory/relievedKlopp.jpg'
		},
		{
			name : 'Serious Klopp',
			img  : 'img/memory/seriousKlopp.jpg'
		},
		{
			name : 'Serious Klopp',
			img  : 'img/memory/seriousKlopp.jpg'
		},
		{
			name : 'Shouting Klopp',
			img  : 'img/memory/shoutingKlopp.jpg'
		},
		{
			name : 'Shouting Klopp',
			img  : 'img/memory/shoutingKlopp.jpg'
		},
		{
			name : 'Smiling Klopp',
			img  : 'img/memory/smilingKlopp.jpg'
		},
		{
			name : 'Smiling Klopp',
			img  : 'img/memory/smilingKlopp.jpg'
		},
		{
			name : 'Smug Klopp',
			img  : 'img/memory/smugKlopp.jpg'
		},
		{
			name : 'Smug Klopp',
			img  : 'img/memory/smugKlopp.jpg'
		},
		{
			name : 'Young Klopp',
			img  : 'img/memory/youngKlopp.jpg'
		},
		{
			name : 'Young Klopp',
			img  : 'img/memory/youngKlopp.jpg'
		}
	];

	//variables
	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#results');
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsMatched = [];

	//creating our grid/gameboard
	function createBoard() {
		for (let i = 0; i < cards.length; i++) {
			const card = document.createElement('img');
			card.setAttribute('src', 'img/memory/blank.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {
		const twoCards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];

		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match!');
			twoCards[optionOneId].setAttribute('src', 'img/memory/white.jpg');
			twoCards[optionTwoId].setAttribute('src', 'img/memory/white.jpg');
			cardsMatched.push(cardsChosen);
		} else {
			twoCards[optionOneId].setAttribute('src', 'img/memory/blank.jpg');
			twoCards[optionTwoId].setAttribute('src', 'img/memory/blank.jpg');
			alert('Sorry, no match!');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsMatched.length;

		if (cardsMatched.length === cards.length / 2) {
			resultDisplay.textContent = 'Congatulations, you won!';
		}
	}

	//flip your card
	function flipCard() {
		const cardId = this.getAttribute('data-id');

		//ADD CHECK TO SEE IF ALREADY MATCHED

		// if (cardsChosenId.length === 1 && cardsChosenId[0] == cardId) {
		// 	return;
		// }
		// if (this.src.search('white.png') != -1) {
		// 	return;
		// }
		cardsChosen.push(cards[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cards[cardId].img);

		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 200);
		}
	}

	createBoard();
});
