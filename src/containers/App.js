import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import Navbar from "../components/Navbar.js";
import Main from "../components/Main.js";
import Login from "../components/Login.js";
import { syncNutrition, syncSleep, syncWorkouts, setActiveSection, logIn, addDailyFoods } from "../actions"

const mapStateToProps = state => {
	return {
		activeSection: state.activeSection,
		isLoggedIn: state.isLoggedIn,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setSection: (e) => dispatch(setActiveSection(e.target.title)),
		logIn: (response) => dispatch(logIn(response)),
		addDailyFoods: (foods) => dispatch(addDailyFoods(foods)),
		syncWorkoutsFunc: (id) => dispatch(syncWorkouts(id)),
		syncNutritionFunc: (id) => dispatch(syncNutrition(id)),
		syncSleepFunc: (id) => dispatch(syncSleep(id))
	}
};


class App extends Component {
	render() {
		const { syncNutritionFunc, syncSleepFunc, syncWorkoutsFunc, logInFacebook, setSection, isLoggedIn } = this.props;
	    return (
	      isLoggedIn ?
	      <div className="App">
			   <Navbar setSection={setSection} />
			   <Main />
	      </div>
	      : <Login logInFacebook={logInFacebook}
	      		   addDailyFoods={addDailyFoods}
	      		   syncWorkoutsFunc={syncWorkoutsFunc}
	      		   syncSleepFunc={syncSleepFunc}
	      		   syncNutritionFunc={syncNutritionFunc} />
	    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

