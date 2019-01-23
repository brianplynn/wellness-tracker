import { combineReducers } from "redux";
import activeSection from "./activeSection.js";
import nutrientFields from "./nutrientFields.js";
import dailyFoods from "./dailyFoods.js";

export default combineReducers({
	activeSection,
	nutrientFields,
	dailyFoods
})
