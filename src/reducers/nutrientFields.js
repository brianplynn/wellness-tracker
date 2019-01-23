import { ADD_DAILY_FOOD, SET_FOOD_FIELD, SET_CALORIES_FIELD, SET_FAT_FIELD, SET_CARBS_FIELD, SET_PROTEIN_FIELD } from "../constants/action-types.js"

const nutrientFields = (state={ food: "", calories: "", fat:"", carbs:"", protein: "" }, action={}) => {
	switch (action.type) {
		case SET_FOOD_FIELD:
			return Object.assign({}, state, { food: action.payload });
		case SET_CALORIES_FIELD:
			return Object.assign({}, state, { calories: action.payload });
		case SET_FAT_FIELD:
			return Object.assign({}, state, { fat: action.payload });
		case SET_CARBS_FIELD:
			return Object.assign({}, state, { carbs: action.payload });
		case SET_PROTEIN_FIELD:
			return Object.assign({}, state, { protein: action.payload });
		case ADD_DAILY_FOOD:
			return { food: "", calories: "", fat:"", carbs:"", protein: "" }
		default:
			return state;
	}
}

export default nutrientFields;