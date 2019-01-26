import React, { Component } from "react";
import { connect } from "react-redux";
import ExerciseCalendar from "../components/Exercise/ExerciseCalendar.js"
import ExerciseInfo from "../components/Exercise/ExerciseInfo.js"
import { changeDate } from "../actions"
const mapStateToProps = state => ({
	currentDate: state.currentDate,
});

const mapDispatchToProps = dispatch => ({
	changeDate: (e) => {
		console.log(e.target);
		dispatch(changeDate(e.target.dataset.key))
	}
});

class Exercise extends Component {
	render() {
		const { currentDate, changeDate } = this.props;
		return (
			<div>
				<ExerciseCalendar currentDate={currentDate}
								  changeDate={changeDate}  />
				<ExerciseInfo currentDate={currentDate} />
			</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);