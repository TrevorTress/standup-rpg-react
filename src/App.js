import React, { useState } from 'react';

function App() {
	const Card = ({ name, type, attack }) => {
		return (
			<div>
				<p>{name}</p>
				<p>{type}</p>
				<p>Attack: {attack}</p>
			</div>
		);
	};

	const Deck = () => {
		const [cards, setCards] = useState([
			{ name: 'bad joke', type: 'Edgy', attack: 10 },
			{ name: 'bad joke', type: 'Hacky', attack: 8 },
			{ name: 'bad joke', type: 'Smart', attack: 12 },
		]);

		const shuffleCards = () => {
			setCards(
				cards
					.map((a) => ({ sort: Math.random(), value: a }))
					.sort((a, b) => a.sort - b.sort)
					.map((a) => a.value)
			);
		};

		return (
			<div>
				<button onClick={shuffleCards}>Shuffle</button>
				{cards.map((card, index) => (
					<Card key={index} name={card.name} type={card.type} attack={card.attack} />
				))}
			</div>
		);
	};
}
export default App;
