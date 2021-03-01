import { createSelector } from "reselect";
import { initialState } from "../../reducer/reducer";

const selectHomeContainerDomain = (state) =>
	state.homeContainer || initialState;
const makeSelectHomeContainerCounter = () =>
	createSelector(selectHomeContainerDomain, (substate) => substate.counter);

export { makeSelectHomeContainerCounter };
