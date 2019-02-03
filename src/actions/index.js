import { CANCEL_SLEEP, EDIT_SLEEP, CHANGE_SLEEP_ADD_FORM, ADD_SLEEP_TO_GRAPH, CANCEL_WORKOUT_EDIT, SAVE_SLEEP_CHANGES, CHANGE_SLEEP_FIELD, DELETE_WORKOUT, SAVE_WORKOUT_CHANGES, ADD_WORKOUT, CHANGE_WORKOUT_TITLE, CHANGE_WORKOUT_FIELD, EDIT_WORKOUT, CHANGE_DATE, ADD_ANOTHER_FOOD, FORM_ERROR, DELETE_FOOD, ADD_DAILY_FOOD, SET_ACTIVE_SECTION, SET_FOOD_FIELD, SET_CALORIES_FIELD, SET_FAT_FIELD, SET_CARBS_FIELD, SET_PROTEIN_FIELD } from "../constants/action-types.js"

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
});

export const changeDate = (date) => ({
	type: CHANGE_DATE,
	payload: date
});

export const editWorkout = (day, workout) => ({
	type: EDIT_WORKOUT,
	payload: {
		day,
		workout
	}
});

export const cancelWorkoutEdit = (day, workout) => ({
	type: CANCEL_WORKOUT_EDIT
});

export const changeWorkoutField = (day, row, col, value) => ({
	type: CHANGE_WORKOUT_FIELD,
	payload: {
		day,
		row,
		col,
		value
	}
});

export const changeWorkoutTitle = (day, value) => ({
	type: CHANGE_WORKOUT_TITLE,
	payload: {
		day,
		value
	}
});

export const addWorkout = (day) => ({
	type: ADD_WORKOUT,
	payload: day
});

export const saveWorkoutChanges = (day, fields) => ({
	type: SAVE_WORKOUT_CHANGES,
	payload: {
		day,
		fields
	}
});

export const deleteWorkout = (day, row) => ({
	type: DELETE_WORKOUT,
	payload: {
		day,
		row
	}
});

export const changeSleepField = (row, col, value) => ({
	type: CHANGE_SLEEP_FIELD,
	payload: {
		row,
		col,
		value,
	}
});

export const saveSleepChanges = data => ({
	type: SAVE_SLEEP_CHANGES,
	payload: data
});

export const changeSleepAddForm = (field, val) => ({
	type: CHANGE_SLEEP_ADD_FORM,
	payload: {
		field,
		val
	}
});

export const addSleepToGraph = data => ({
	type: ADD_SLEEP_TO_GRAPH,
	payload: data
});

export const editSleep = data => ({
	type: EDIT_SLEEP,
	payload: data
});


export const cancelSleep = () => ({
	type: CANCEL_SLEEP
});