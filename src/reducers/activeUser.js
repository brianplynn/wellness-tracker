import { LOG_IN_FB } from "../constants/action-types.js"

const initialState = {
	id: '',
	name: '',
	email: ''
}

const activeUser = (state=initialState, action={}) => {
	switch (action.type) {
		case LOG_IN_FB:
			return action.payload;
		default:
			return state;
	}
}

export default activeUser;
