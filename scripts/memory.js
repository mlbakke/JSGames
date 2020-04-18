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

	//creating our grid/gameboard
	const grid = document.querySelector('.grid');
	const cardsChosen = [];
	const cardsChosenId = [];

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

	//flip your card
	function flipCard() {
		const cardId = this.getAttribute('data-id');
		cardsChosen.push(cards[cardId.name]);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cards[cardId].img);
	}

	createBoard();
});
