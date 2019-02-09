import { LOG_IN_FB, SET_ACTIVE_SECTION } from "../constants/action-types.js"

const activeSection = (state="", action={}) => {
	switch (action.type) {
		case SET_ACTIVE_SECTION:
			return action.payload;
		case LOG_IN_FB:
			return "nutrition";
		default:
			return state;
	}
}

export default activeSection;
