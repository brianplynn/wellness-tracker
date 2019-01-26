import { SET_ACTIVE_SECTION, CHANGE_DATE } from "../constants/action-types.js"

const currentDate = (state = new Date(), action={}) => {
	console.log(state.getDate() - state.getDay() + Number(action.payload));
	switch(action.type) {
		case SET_ACTIVE_SECTION: 
			return new Date();
		case CHANGE_DATE:
			return new Date(state.setDate(state.getDate() - state.getDay() + Number(action.payload)));
		default:
			return state;
	}
}
export default currentDate;