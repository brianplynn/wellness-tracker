import { DELETE_FOOD, ADD_DAILY_FOOD } from "../constants/action-types.js"

const dailyFoods = (state=[], action={}) => {
	switch (action.type) {
		case ADD_DAILY_FOOD:
			return state.concat(action.payload);
		case DELETE_FOOD:
			return state.slice(0,action.payload).concat(state.slice(Number(action.payload)+1))
		default:
			return state;
	}
}

export default dailyFoods;