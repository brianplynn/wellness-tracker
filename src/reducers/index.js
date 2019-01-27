import { combineReducers } from "redux";
import activeSection from "./activeSection.js";
import currentDate from "./currentDate.js"
import nutrientFields from "./nutrientFields.js";
import dailyFoods from "./dailyFoods.js";
import displayTable from "./displayTable.js";
import formErrorText from "./formErrorText.js";
import workouts from "./workouts.js";
import editingWorkout from "./editingWorkout.js";
import { workoutFields } from "./workoutFields.js";


export default combineReducers({
	activeSection,
	currentDate,
	nutrientFields,
	dailyFoods,
	displayTable,
	formErrorText,
	workouts,
	editingWorkout,
	workoutFields
})
