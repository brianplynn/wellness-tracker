import { ADD_SLEEP_TO_GRAPH } from "../constants/action-types.js"

const addingSleep = (state=true, action={}) => {
	switch (action.type) {
		case ADD_SLEEP_TO_GRAPH:
			return false;
		default:
			return state;
	}
}

export default addingSleep;