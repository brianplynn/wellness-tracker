import { SAVE_SLEEP_CHANGES } from "../constants/action-types.js"
import { arrayReplace } from "./workoutFields.js"

const initialSleepState = [
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

const sleepData = (state=initialSleepState, action={}) => {
	switch (action.type) {
		case SAVE_SLEEP_CHANGES:
			return action.payload;
		default:
			return state;
	}
}

export default sleepData;
