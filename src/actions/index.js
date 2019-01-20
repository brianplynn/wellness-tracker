import { SET_ACTIVE_SECTION } from "../constants/action-types.js"

export const setActiveSection = (section) => ({
	type: SET_ACTIVE_SECTION,
	payload: section
});