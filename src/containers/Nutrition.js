import React, { Component } from "react";
import NutritionInput from "../components/Nutrition/NutritionInput.js"
import NutritionTable from "../components/Nutrition/NutritionTable.js"
import { addAnotherFood, cancelFood, submitEdamameField, setNutrientFields, addDailyFoods, deleteFood } from "../actions"
import { connect } from "react-redux";

const mapStateToProps = state => ({
	nutrientFields: state.nutrientFields,
	dailyFoods: state.dailyFoods,
	displayTable: state.displayTable
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onFieldChange: (e) => dispatch(setNutrientFields(e.target.id, e.target.value)),
	submitEdamameField: (text, e) => {
		e.preventDefault();
		return dispatch(submitEdamameField(text));
	},
	onSubmit: (food, formCorrect, e) => {
		if (formCorrect) {
			e.preventDefault();
			return dispatch(addDailyFoods(food)); 
		}
	},
	deleteFood: (e) => dispatch(deleteFood(e.target.value)),
	cancelFood: () => dispatch(cancelFood()),
	addAnotherFood: () => dispatch(addAnotherFood())
});

class Nutrition extends Component {
	render() {
		const { cancelFood, submitEdamameField, addAnotherFood, displayTable, nutrientFields, dailyFoods, onFieldChange, onSubmit, deleteFood } = this.props;
		return (
			<div className="nutrition">
				{ !displayTable ? 
				<NutritionInput nutrientFields={nutrientFields}
								submitEdamameField={submitEdamameField}
								onFieldChange={onFieldChange}
								cancelFood={cancelFood}
								onSubmit={onSubmit} /> :
				<NutritionTable dailyFoods={dailyFoods}
								deleteFood={deleteFood}
								addAnotherFood={addAnotherFood} /> }
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);