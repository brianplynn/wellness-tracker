import { SET_ACTIVE_SECTION } from "../constants/action-types.js"

const initialState = {
	id: '',
	name: '',
	email: ''
}

const activeUser = (state=initialState, action={}) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default activeUser;
