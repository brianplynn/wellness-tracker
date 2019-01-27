import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import Navbar from "../components/Navbar.js";
import Main from "../components/Main.js";
import { setActiveSection } from "../actions"

const mapStateToProps = state => {
	return {
		activeSection: state.activeSection
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setSection: (e) => dispatch(setActiveSection(e.target.title))
	}
};


class App extends Component {
	render() {
		const { activeSection, setSection } = this.props;
	    return (
	      <div className="App">
	      	<div className="z-2">
	      	<Navbar setSection={setSection} />
	      	<Main activeSection={activeSection}/>
	      	</div>
	      </div>
	    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/* STRUCTURE:

Nurtrition: graph on the left side that can show caloric intake / 
protein  / fat / carb intake over 7 / 30 days

on the right  an input box that connects to edamame api to search for 
foods. once found and submitted, adds to a table of foods already eaten 
that day, which add up to a total 

Sleep:

sleep graph plus an input box for how many hours, emoji to 
demonsrate how the sleep went

Exercise:

You are on day x of your 7/14-day plan! 2x7 table. current day's workout listed below with optino to edit.
clicking on another day lets you update that day


Things in my state object:

date
which module i've clicked on

nutrition:
all the foods i've eaten that day stored as an array of objects, 
with nutrients as keys

value of each input field (auto and manual)

also could transition between calories counter

sleep:
my sleep for last week, stored as an array of objects with length
and quality as keys

current sleep value and quality (based on input checkbox and field)

exercise:
 current workout (based on day)
 current day of workout


*/

