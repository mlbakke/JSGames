const cardDeck = {
	deck        : [],
	drawnCards  : [],
	suits       : [ 'hearts', 'diamonds', 'spades', 'clubs' ],
	values      : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	fillDeck() {
		const { suits, values, deck } = this;
		//push one of each card into deck
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value,
					suit
				});
			}
		}
	},
	shuffleDeck() {
		const { deck } = this;
		//Durstenfeld shuffle -- O(n)
		for (let i = deck.length - 1; i > 0; i--) {
			// const j: 0 <= j <= i
			const j = Math.floor(Math.random() * (i + 1));
			//swap card [i] and [j]
			[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
		}
	},
	drawCard() {
		const draw = this.deck.pop();
		this.drawnCards.push(draw);
		return draw;
	},
	drawCards(num) {
		const { deck, drawnCards } = this;
		const thisDraw = [];
		for (let i = 0; i < num; i++) {
			const draw = deck.pop();
			thisDraw.push(draw);
			drawnCards.push(draw);
		}
		return thisDraw;
	}
};
