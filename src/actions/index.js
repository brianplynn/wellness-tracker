import { ADD_ANOTHER_FOOD, FORM_ERROR, DELETE_FOOD, ADD_DAILY_FOOD, SET_ACTIVE_SECTION, SET_FOOD_FIELD, SET_CALORIES_FIELD, SET_FAT_FIELD, SET_CARBS_FIELD, SET_PROTEIN_FIELD } from "../constants/action-types.js"

export const setActiveSection = (section) => ({
	type: SET_ACTIVE_SECTION,
	payload: section
});

export const setNutrientFields = (id, text) => {
	switch (id) {
		case "food":
			return ({
				type: SET_FOOD_FIELD,
				payload: text
			});
		case "calories":
			return ({
				type: SET_CALORIES_FIELD,
				payload: text
			});
		case "fat":
			return ({
				type: SET_FAT_FIELD,
				payload: text
			});
		case "carbs":
			return ({
				type: SET_CARBS_FIELD,
				payload: text
			});
		default:
			return ({
				type: SET_PROTEIN_FIELD,
				payload: text
			});
	}
};

export const addDailyFoods = (food) => ({
	type: ADD_DAILY_FOOD,
	payload: food
});

export const deleteFood = (num) => ({
	type: DELETE_FOOD,
	payload: num
});

export const formError = () => ({
	type: FORM_ERROR
});

export const addAnotherFood = () => ({
	type: ADD_ANOTHER_FOOD
})