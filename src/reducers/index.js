import { combineReducers } from "redux";
import activeSection from "./activeSection.js";
import currentDate from "./currentDate.js"
import nutrientFields from "./nutrientFields.js";
import dailyFoods from "./dailyFoods.js";
import displayTable from "./displayTable.js";
import sleepData from "./sleepData.js";
import sleepFields from "./sleepFields.js";
import workouts from "./workouts.js";
import editingWorkout from "./editingWorkout.js";
import { workoutFields } from "./workoutFields.js";
import addingSleep from "./addingSleep.js";
import editingSleepData from "./editingSleepData.js";
import sleepAddForm from "./sleepAddForm.js";


export default combineReducers({
	activeSection,
	currentDate,
	nutrientFields,
	dailyFoods,
	displayTable,
	addingSleep,
	editingSleepData,
	sleepData,
	sleepFields,
	sleepAddForm,
	workouts,
	editingWorkout,
	workoutFields
})
