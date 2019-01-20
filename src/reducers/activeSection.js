import { SET_ACTIVE_SECTION } from "../constants/action-types.js"

const activeSection = (state="nutrition", action={}) => {
	switch (action.type) {
		case SET_ACTIVE_SECTION:
			return action.payload;
		default:
			return state;
	}
}

export default activeSection;
