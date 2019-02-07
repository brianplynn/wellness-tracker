import React, { Component } from "react";
import NutritionInput from "../components/Nutrition/NutritionInput.js"
import NutritionTable from "../components/Nutrition/NutritionTable.js"
import { selectEdamame, addAnotherFood, cancelFood, submitEdamameField, setNutrientFields, addDailyFoods, deleteFood } from "../actions"
import { connect } from "react-redux";

const mapStateToProps = state => ({
	nutrientFields: state.nutrientFields,
	edamame: state.edamame,
	dailyFoods: state.dailyFoods,
	displayTable: state.displayTable
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onFieldChange: (e) => dispatch(setNutrientFields(e.target.id, e.target.value)),
	submitEdamameField: (text, e) => {
		e.preventDefault();
		return dispatch(submitEdamameField(text));
	},
	selectEdamame: (food) => dispatch(selectEdamame(food)),
	onSubmit: (food, formCorrect, e) => {
		if (formCorrect) {
			e.stopPropagation();
  			e.nativeEvent.stopImmediatePropagation();
			return dispatch(addDailyFoods(food)); 
		}
	},
	deleteFood: (e) => dispatch(deleteFood(e.target.value)),
	cancelFood: () => dispatch(cancelFood()),
	addAnotherFood: () => dispatch(addAnotherFood())
});

class Nutrition extends Component {
	render() {
		const { cancelFood, selectEdamame, submitEdamameField, addAnotherFood, displayTable, nutrientFields, dailyFoods, onFieldChange, onSubmit, deleteFood } = this.props;
		const { searchResults, isPending, isSearching, error } = this.props.edamame;
		return (
			<div className="nutrition">
				{ !displayTable ? 
				<NutritionInput nutrientFields={nutrientFields}
								submitEdamameField={submitEdamameField}
								selectEdamame={selectEdamame}
								searchResults={searchResults}
								isPending={isPending}
								isSearching={isSearching}
								error={error}
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