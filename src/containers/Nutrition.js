import React, { Component } from "react";
import NutritionInput from "../components/NutritionInput.js"
import NutritionTable from "../components/NutritionTable.js"
import { setNutrientFields, addDailyFoods, deleteFood } from "../actions"
import { connect } from "react-redux";

const mapStateToProps = state => ({
	nutrientFields: state.nutrientFields,
	dailyFoods: state.dailyFoods
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onFieldChange: (e) => dispatch(setNutrientFields(e.target.id, e.target.value)),
	onSubmit: (food) => dispatch(addDailyFoods(food)),
	deleteFood: (e) => dispatch(deleteFood(e.target.value))
});

class Nutrition extends Component {
	render() {
		const { nutrientFields, dailyFoods, onFieldChange, onSubmit, deleteFood } = this.props;
		return (
			<div className="nutrition">
				<NutritionInput nutrientFields={nutrientFields}
								onFieldChange={onFieldChange}
								onSubmit={onSubmit} />
				<NutritionTable dailyFoods={dailyFoods}
								deleteFood={deleteFood} />
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);