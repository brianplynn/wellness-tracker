import React, { Component } from "react";
import { connect } from "react-redux";
import ExerciseCalendar from "../components/Exercise/ExerciseCalendar.js"
import ExerciseInfo from "../components/Exercise/ExerciseInfo.js";
import { addWorkout, deleteWorkout, saveWorkoutChanges, changeDate, editWorkout, changeWorkoutField, changeWorkoutTitle } from "../actions";

const mapStateToProps = state => ({
	currentDate: state.currentDate,
	workouts: state.workouts,
	editingWorkout: state.editingWorkout,
	workoutFields: state.workoutFields
});

const mapDispatchToProps = dispatch => ({
	changeDate: (e) => 	dispatch(changeDate(e.target.dataset.key)),
	editWorkout: (day, workout) => dispatch(editWorkout(day, workout)),
	changeWorkoutField: (e) => dispatch(changeWorkoutField(e.target.dataset.day, e.target.dataset.row, e.target.dataset.col, e.target.value)),
	changeWorkoutTitle: (e) => dispatch(changeWorkoutTitle(e.target.dataset.day, e.target.value)),
	addWorkout: (e) => dispatch(addWorkout(e.target.dataset.day)),
	deleteWorkout: (e) => dispatch(deleteWorkout(e.target.dataset.day, e.target.dataset.row)),
	saveChanges: (day, fields) => dispatch(saveWorkoutChanges(day, fields))
});

class Exercise extends Component {
	render() {
		const { currentDate, saveChanges, addWorkout, deleteWorkout, changeWorkoutField, changeWorkoutTitle, editingWorkout, editWorkout, workouts, workoutFields, changeDate } = this.props;
		return (
			<div>
				<ExerciseCalendar currentDate={currentDate}
								  changeDate={changeDate}
								  workouts={workouts}  />
				<ExerciseInfo currentDate={currentDate}
							  addWorkout={addWorkout}
							  deleteWorkout={deleteWorkout}
							  changeWorkoutField={changeWorkoutField}
							  changeWorkoutTitle={changeWorkoutTitle}
							  saveChanges={saveChanges}
							  editingWorkout={editingWorkout}
							  editWorkout={editWorkout}
							  workouts={workouts}
							  workoutFields={workoutFields} />
			</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);