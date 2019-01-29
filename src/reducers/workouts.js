import { arrayReplace } from "./workoutFields.js"
import { SAVE_WORKOUT_CHANGES } from "../constants/action-types.js"

const initialWorkoutState = [
	{ 
			title: "Rest",
			workoutList: []
	 	}, 
	{
	 		title: "Rest",
	 		workoutList: []
	 	}, 
	{
	 		title: "Rest",
	 		workoutList: []
	 	}, 
	{
	 		title: "Rest",
	 		workoutList: []
	 	}, 
	{
	 		title: "Rest",
	 		workoutList: []
	 	}, 
	{
	 		title: "Rest",
	 		workoutList: []
	 	}, 
	{
	 		title: "Rest",
	 		workoutList: []
	 	}, 
 	];

const workouts = (state=initialWorkoutState, action={}) => {
	switch (action.type) {
		case SAVE_WORKOUT_CHANGES:
			action.payload.fields.workoutList = action.payload.fields.workoutList.filter(workout => workout.text || workout.weight || workout.sets || workout.reps);
			if (!action.payload.fields.title) { 
				if (!action.payload.fields.workoutList[0]) {
					action.payload.fields.title = "Rest";
				} else {
					action.payload.fields.title = "Untitled Workout";
				}
			} else if (action.payload.fields.title && !action.payload.fields.workoutList[0]) {
					action.payload.fields.title = "Rest";
			}
			return arrayReplace(state, action.payload.fields, action.payload.day);
		default:
			return state;
	}
}

export default workouts;
