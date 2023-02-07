import { useState } from 'react';

// 'Card' component takes card info and creates div with info (called in deck component)
const Card = ({ name, type, attack }) => {
	return (
		<div>
			<p>{name}</p>
			<p>{type}</p>
			<p>Attack: {attack}</p>
		</div>
	);
};

// 'Deck' component represents player deck
const Deck = () => {
	// determined by state array
	const [cards, setCards] = useState([
		{ name: 'bad joke', type: 'Edgy', attack: 10 },
		{ name: 'bad joke', type: 'Hacky', attack: 8 },
		{ name: 'bad joke', type: 'Smart', attack: 12 },
	]);

	// shuffle function (called by button)
	const shuffleCards = () => {
		// assigns new order to state array
		setCards(
			cards
				.map((a) => ({ sort: Math.random(), value: a }))
				.sort((a, b) => a.sort - b.sort)
				.map((a) => a.value)
		);
	};

	// 'Deck' returns state array as visible mapped array of card components
	return (
		<div>
			<button onClick={shuffleCards}>Shuffle</button>
			{cards.map((card, index) => (
				<Card key={index} name={card.name} type={card.type} attack={card.attack} />
			))}
		</div>
	);
};

export default Deck;
