import { EDIT_SLEEP, CHANGE_SLEEP_FIELD } from "../constants/action-types.js"
import { arrayReplace } from "./workoutFields.js"

const initialSleepFieldsState = [
	{
		hours: "",
		minutes: "",
		quality: ""
	},
	{
		hours: "",
		minutes: "",
		quality: ""
	},
	{
		hours: "",
		minutes: "",
		quality: ""
	},
	{
		hours: "",
		minutes: "",
		quality: ""
	},
	{
		hours: "",
		minutes: "",
		quality: ""
	},
	{
		hours: "",
		minutes: "",
		quality: ""
	},
	{
		hours: "",
		minutes: "",
		quality: ""
	},
]

const sleepFields = (state=initialSleepFieldsState, action={}) => {
	switch (action.type) {
		case CHANGE_SLEEP_FIELD:
			return arrayReplace(state, Object.assign(state[action.payload.row], { [action.payload.col]: action.payload.value }), action.payload.row);
		case EDIT_SLEEP:
			return action.payload.map( item => ({ hours: Math.floor(Number(item.hours)), 
												  minutes: (Number(item.hours) - Math.floor(Number(item.hours))) * 60, 
												  quality: item.quality })).slice().reverse();
		default:
			return state;
	}
}

export default sleepFields;
