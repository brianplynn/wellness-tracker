import { EDIT_WORKOUT, CHANGE_DATE, SAVE_WORKOUT_CHANGES } from "../constants/action-types.js"

const editingWorkout = (state=false, action={}) => {
	switch (action.type) {
		case EDIT_WORKOUT:
			return true;
		case CHANGE_DATE:
			return false;
		case SAVE_WORKOUT_CHANGES:
			return false;
		default:
			return state;
	}
}

export default editingWorkout;