import { SAVE_SLEEP_CHANGES } from "../constants/action-types.js"
import { arrayReplace } from "./workoutFields.js"

const d = new Date();
const dateArr = [];

for (let i = 0; i < 7; i++) {
	dateArr.push((d.getMonth() + 1) +"/" + (d.getDate() - 6 + i));
}

const initialSleepState = {
	coordinates: [
		{
			date: 1,
			hours: "",
			quality: ""
		},
		{
			date: 2,
			hours: "",
			quality: "",

		},
		{
			date: 3,
			hours: "",
			quality: "",
		},
		{
			date: 4,
			hours: "",
			quality: "",
		},
		{
			date: 5,
			hours: "",
			quality: "",
		},
		{
			date: 6,
			hours: "",
			quality: "",
		},
		{
			date: 7,
			hours: "",
			quality: "",
		}],
	dates: dateArr
}

const sleepData = (state=initialSleepState, action={}) => {
	switch (action.type) {
		case SAVE_SLEEP_CHANGES:
			return Object.assign({}, state, 
				{ coordinates: action.payload.map( (item, i) => ({ 
														date: i+1, 
														hours: Number(item.hours)+Number(item.minutes/60), 
														quality: item.quality 
													}))
			});
		default:
			return state;
	}
}

export default sleepData;
