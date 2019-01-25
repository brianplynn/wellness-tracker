import { ADD_DAILY_FOOD, ADD_ANOTHER_FOOD } from "../constants/action-types.js"

const displayTable = (state=false, action={}) => {
	switch (action.type) {
		case ADD_DAILY_FOOD:
			return true;
		case ADD_ANOTHER_FOOD:
			return false;
		default:
			return state;
	}
}

export default displayTable;