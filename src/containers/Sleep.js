import React, { Component } from "react";
import SleepTable from "../components/Sleep/SleepTable.js"
import SleepInput from "../components/Sleep/SleepInput.js"
import SleepGraph from "../components/Sleep/SleepGraph.js"

class Sleep extends Component {
	render() {
		return (
			<div>
				<SleepInput />
				<SleepTable />
				<SleepGraph />
			</div>
		);
	}
}

export default Sleep;