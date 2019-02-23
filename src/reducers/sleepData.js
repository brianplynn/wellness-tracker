import { SET_ACTIVE_SECTION, SAVE_SLEEP_CHANGES, ADD_SLEEP_TO_GRAPH } from "../constants/action-types.js"

const testingSleepState = {
	coordinates: [
		{
			date: 1,
			hours: 8,
			quality: "Good"
		},
		{
			date: 2,
			hours: 8.5,
			quality: "Good",

		},
		{
			date: 3,
			hours: 7.25,
			quality: "OK",
		},
		{
			date: 4,
			hours: 8,
			quality: "Good",
		},
		{
			date: 5,
			hours: 6,
			quality: "Bad",
		},
		{
			date: 6,
			hours: 9.25,
			quality: "OK",
		},
		{
			date: 7,
			hours: 3,
			quality: "Bad",
		}],
	dates: []
}

const initialSleepState = {
	coordinates: [
		{
			date: 1,
			hours: 0,
			quality: ""
		},
		{
			date: 2,
			hours: 0,
			quality: "",

		},
		{
			date: 3,
			hours: 0,
			quality: "",
		},
		{
			date: 4,
			hours: 0,
			quality: "",
		},
		{
			date: 5,
			hours: 0,
			quality: "",
		},
		{
			date: 6,
			hours: 0,
			quality: "",
		},
		{
			date: 7,
			hours: 0,
			quality: "",
		}],
	dates: []
}


const sleepData = (state=initialSleepState, action={}) => {
	switch (action.type) {
		case SAVE_SLEEP_CHANGES:
			return Object.assign({}, state, 
				{ coordinates: action.payload.slice().reverse().map( (item, i) => ({ 
														date: i+1, 
														hours: Number(item.hours)+Number(item.minutes)/60, 
														quality: item.quality 
													}))
			});
		case ADD_SLEEP_TO_GRAPH:
			return Object.assign({}, state, { coordinates: state.coordinates.slice(1, 7)
																			.map( (item, i) => {
																				return Object.assign({}, item, { date: i+1 })
																			})
																			.concat({
																				date: 7,
																				hours: Number(action.payload.hours)+Number(action.payload.minutes)/60,
																				quality: action.payload.quality
																			})});
		
		case SET_ACTIVE_SECTION: 
			const dateArr = [];
			const d = new Date();
			for (let i = 6; i >=0; i--) {
				let date = new Date(d.getYear(), d.getMonth(), d.getDate() - i)
				dateArr.push((date.getMonth() + 1) +"/" + date.getDate());
			}
			return Object.assign({}, state, { dates: dateArr })
		default:
			return state;
	}
}

export default sleepData;
