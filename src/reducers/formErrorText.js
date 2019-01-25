import { FORM_ERROR } from "../constants/action-types.js"

const formErrorText = (state="", action={}) => {
	switch (action.type) {
		case FORM_ERROR:
			return "Something's wrong! Check the form again.";
		default:
			return state;
	}
}

export default formErrorText;