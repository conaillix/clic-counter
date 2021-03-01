import { INCREMENT, DECREMENT } from "../containers/HomeContainer/constant";

export const initialState = {
	counter: 0,
};

export default function homeContainerReducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			};
		case DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
		default:
			return state;
	}
}
