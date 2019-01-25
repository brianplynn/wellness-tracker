import { combineReducers } from "redux";
import activeSection from "./activeSection.js";
import nutrientFields from "./nutrientFields.js";
import dailyFoods from "./dailyFoods.js";
import displayTable from "./displayTable.js"
import formErrorText from "./formErrorText.js"

export default combineReducers({
	activeSection,
	nutrientFields,
	dailyFoods,
	displayTable,
	formErrorText
})
