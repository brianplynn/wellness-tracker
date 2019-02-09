import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercise from "../containers/Exercise.js";
import Sleep from "../containers/Sleep.js";
import Nutrition from "../containers/Nutrition.js";

const Main = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route path="/nutrition" component={Nutrition} />
				<Route path="/sleep" component={Sleep} />
				<Route path="/exercise" component={Exercise} />
			</Switch>
		</React.Fragment>
		)
}

export default Main;