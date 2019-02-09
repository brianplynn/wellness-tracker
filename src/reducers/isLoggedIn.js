import { LOG_IN_FB } from "../constants/action-types.js"

const isLoggedIn = (state=false, action={}) => {
	switch (action.type) {
		case LOG_IN_FB:
			return true;
		default:
			return state;
	}
}

export default isLoggedIn;