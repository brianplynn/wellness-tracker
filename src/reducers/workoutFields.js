import { ADD_WORKOUT, CHANGE_WORKOUT_TITLE, CHANGE_WORKOUT_FIELD } from "../constants/action-types.js"

const workout = {
 			text: "",
			weight: 0, 	
 			reps: 0,
 			sets: 0		
 		}

export const initialWorkoutState = [
	{ 
			title: "Rest",
			workout: []
	 	}, 
	{
	 		title: "Rest",
	 		workout: []
	 	}, 
	{
	 		title: "Rest",
	 		workout: []
	 	}, 
	{
	 		title: "Rest",
	 		workout: []
	 	}, 
	{
	 		title: "Rest",
	 		workout: []
	 	}, 
	{
	 		title: "Rest",
	 		workout: []
	 	}, 
	{
	 		title: "Rest",
	 		workout: []
	 	}, 
 	];

export const arrayReplace = (array, item, i) => {
	return array.slice(0,i).concat(item).concat(array.slice(i+1, array.length));
}

export const workoutFields = (state=initialWorkoutState, action={}) => {
	switch (action.type) {
		case CHANGE_WORKOUT_TITLE:
			return arrayReplace(state, { title: action.payload.value, workout: state[action.payload.day].workout }, action.payload.day);
		case CHANGE_WORKOUT_FIELD:
			const { col, day, row, value } = action.payload;
			return arrayReplace(state, 
								{ title: state[day].title, 
								  workout: arrayReplace(state[day].workout, 
								 						Object.assign({}, 
								 									  state[day].workout[row], 
								 									  { [col]: value }),
								 						row) },
								day);
		case ADD_WORKOUT:
			return arrayReplace(state, { title: state[action.payload].title, workout: state[action.payload].workout.concat(workout) }, action.payload);
		default:
			return state;
	}
}