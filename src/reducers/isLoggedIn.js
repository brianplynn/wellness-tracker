import { LOG_IN } from "../constants/action-types.js"

const isLoggedIn = (state=false, action={}) => {
	switch (action.type) {
		case LOG_IN:
			return true;
		default:
			return state;
	}
}

export default isLoggedIn;