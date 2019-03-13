import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import Navbar from "../components/Navbar.js";
import Main from "../components/Main.js";
import Login from "../components/Login.js";
import ErrorMessage from "../components/ErrorMessage.js";
import { setError, syncNutrition, syncSleep, syncWorkouts, setActiveSection, logIn, addDailyFoods } from "../actions"

const mapStateToProps = state => {
	return {
		activeSection: state.activeSection,
		isLoggedIn: state.isLoggedIn,
		messageText: state.messageText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setSection: (e) => dispatch(setActiveSection(e.target.title)),
		logIn: (response) => dispatch(logIn(response)),
		addDailyFoods: (foods) => dispatch(addDailyFoods(foods)),
		syncWorkoutsFunc: (id) => dispatch(syncWorkouts(id)),
		syncNutritionFunc: (id) => dispatch(syncNutrition(id)),
		syncSleepFunc: (id) => dispatch(syncSleep(id)),
		setErrorMessage: (msg) => dispatch(setError(msg))
	}
};


class App extends Component {
	render() {
		const { setErrorMessage, messageText, syncNutritionFunc, syncSleepFunc, syncWorkoutsFunc, logIn, setSection, isLoggedIn } = this.props;
	    return (
	      isLoggedIn ?
	      <div className="App">
			   <Navbar setSection={setSection} />
			   <Main />
	      </div>
	      : <React.Fragment><Login logIn={logIn}
	      		   addDailyFoods={addDailyFoods}
	      		   syncWorkoutsFunc={syncWorkoutsFunc}
	      		   syncSleepFunc={syncSleepFunc}
	      		   syncNutritionFunc={syncNutritionFunc}
	      		   setErrorMessage={setErrorMessage}
	      		   messageText={messageText} />
	      	</React.Fragment>
	    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

