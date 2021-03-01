import { INCREMENT, DECREMENT } from "../containers/HomeContainer/constant";

export function incrementAction() {
	return {
		type: INCREMENT,
	};
}

export function decrementAction() {
	return {
		type: DECREMENT,
	};
}
