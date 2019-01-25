import React from 'react';
import Exercise from "../containers/Exercise.js";
import Sleep from "../containers/Sleep.js";
import Nutrition from "../containers/Nutrition.js";

const Main = ({ activeSection }) => {
	return (
		<React.Fragment>
		{ activeSection === "nutrition" ?
			<Nutrition /> :
			(activeSection === "sleep" ? <Sleep /> : <Exercise />)
		}
		</React.Fragment>
		)
}

export default Main;