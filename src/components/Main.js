import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercise from "../containers/Exercise.js";
import Sleep from "../containers/Sleep.js";
import Nutrition from "../containers/Nutrition.js";

const Main = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route path="/home/nutrition" component={Nutrition} />
				<Route path="/home/sleep" component={Sleep} />
				<Route path="/home/exercise" component={Exercise} />
			</Switch>
		</React.Fragment>
		)
}

export default Main;