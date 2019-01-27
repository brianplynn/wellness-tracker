import { initialWorkoutState, arrayReplace } from "./workoutFields.js"
import { SAVE_WORKOUT_CHANGES } from "../constants/action-types.js"

const workouts = (state=initialWorkoutState, action={}) => {
	switch (action.type) {
		case SAVE_WORKOUT_CHANGES:
			return arrayReplace(state, action.payload.fields, action.payload.day);
		default:
			return state;
	}
}

export default workouts;
