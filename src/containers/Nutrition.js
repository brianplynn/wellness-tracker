import React, { Component } from "react";
import NutritionInput from "../components/Nutrition/NutritionInput.js"
import NutritionTable from "../components/Nutrition/NutritionTable.js"
import { addAnotherFood, setNutrientFields, addDailyFoods, deleteFood, formError } from "../actions"
import { connect } from "react-redux";

const mapStateToProps = state => ({
	nutrientFields: state.nutrientFields,
	dailyFoods: state.dailyFoods,
	formErrorText: state.formErrorText,
	displayTable: state.displayTable
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onFieldChange: (e) => dispatch(setNutrientFields(e.target.id, e.target.value)),
	onSubmit: (food, formCorrect) => {
		if (formCorrect) { 
			return dispatch(addDailyFoods(food)); 
		} else {
			document.getElementById("name-desc").classList.remove("hid");
			document.getElementById("name-desc").classList.add("vis");
			return dispatch(formError());
		}
	},
	deleteFood: (e) => dispatch(deleteFood(e.target.value)),
	addAnotherFood: () => dispatch(addAnotherFood())
});

class Nutrition extends Component {
	render() {
		const { formErrorText, addAnotherFood, displayTable, nutrientFields, dailyFoods, onFieldChange, onSubmit, deleteFood } = this.props;
		return (
			<div className="nutrition">
				{ !displayTable ? 
				<NutritionInput nutrientFields={nutrientFields}
								onFieldChange={onFieldChange}
								onSubmit={onSubmit}
								formErrorText={formErrorText} /> :
				<NutritionTable dailyFoods={dailyFoods}
								deleteFood={deleteFood}
								addAnotherFood={addAnotherFood} /> }
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);