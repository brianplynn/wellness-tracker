import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from 'react-dom';
import * as V from 'victory';
import SleepTable from "../components/Sleep/SleepTable.js";
import SleepInput from "../components/Sleep/SleepInput.js";
import SleepGraph from "../components/Sleep/SleepGraph.js";
import { saveSleepChanges, changeSleepField } from  "../actions";

const mapStateToProps = state => ({
	currentDate: state.currentDate,
	sleepFields: state.sleepFields,
	sleepData: state.sleepData
});

const mapDispatchToProps = dispatch => ({
	changeSleepField: (e) => dispatch(changeSleepField(e.target.dataset.row, e.target.dataset.col, e.target.value)),
	saveSleepChanges: (data) => dispatch(saveSleepChanges(data))
});

class Sleep extends Component {
	render() {
		const { currentDate, sleepData, sleepFields, changeSleepField, saveSleepChanges } = this.props;
		return (
			<div>
				<SleepInput />
				<SleepTable currentDate={currentDate}
							sleepFields={sleepFields}
							changeSleepField={changeSleepField}
							saveSleepChanges={saveSleepChanges} />
				<SleepGraph />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleep);