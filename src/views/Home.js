import React from "react";

function Home({ onIncrement, onDecrement, counter }) {
	return (
		<div>
			<h2>Vous avez cliqué {counter} fois</h2>
			<button
				onClick={() => {
					onIncrement();
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					onDecrement();
				}}
			>
				-
			</button>
		</div>
	);
}

export default Home;
