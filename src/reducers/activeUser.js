import { LOG_IN } from "../constants/action-types.js"

const initialState = {
	id: ''
}

const activeUser = (state=initialState, action={}) => {
	switch (action.type) {
		case LOG_IN:
			return action.payload;
		default:
			return state;
	}
}

export default activeUser;
