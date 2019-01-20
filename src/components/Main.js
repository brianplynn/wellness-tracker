import React from 'react';
import Exercise from "../containers/Exercise.js";
import Sleep from "../containers/Sleep.js";
import Nutrition from "../containers/Nutrition.js";

const Main = ({ activeSection }) => {
	console.log(activeSection);
	return (
		<div className="min-h-100-m light-gray">
		{ activeSection === "nutrition" ?
			<Nutrition /> :
			(activeSection === "sleep" ? <Sleep /> : <Exercise />)
		}
		</div>
		)
}

export default Main;