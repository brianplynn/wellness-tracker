import { combineReducers } from "redux";
import isLoggedIn from "./isLoggedIn";
import activeUser from "./activeUser"
import activeSection from "./activeSection.js";
import currentDate from "./currentDate.js"
import nutrientFields from "./nutrientFields.js";
import edamame from "./edamame.js";
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
import messageText from "./messageText";


export default combineReducers({
	messageText,
	isLoggedIn,
	activeUser,
	activeSection,
	currentDate,
	nutrientFields,
	edamame,
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
